const isomorphicFetch = require('isomorphic-fetch')
const jwt = require('jsonwebtoken')
const jwtDecode = require('jwt-decode');
const jwkRsa = require('jwks-rsa')
const APP_SECRET = 'GraphQL-is-aw3some'

const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getAuthorization = ctx => {
  let authorization;
  let Authorization;

  if (ctx.event.headers.authorization) {
    authorization = ctx.event.headers.authorization
  }

  if (ctx.event.headers.Authorization) {
    Authorization = ctx.event.headers.Authorization
  }

  if (authorization) return authorization
  if (Authorization) return Authorization

  throw new Error('No \"Authorization\" headers')
}

const onlyAdmin = (ctx) => {
  const Authorization = getAuthorization(ctx)
  const token = Authorization.replace('Bearer ', '')

  if (jwtDecode(token).role !== 'ADMIN') {
    throw new Error('Insufficient Authorization, for only ADMIN role')
  }
}

const onlyStaffOrAdmin = (ctx) => {
  const Authorization = getAuthorization(ctx)
  const token = Authorization.replace('Bearer ', '')

  if (jwtDecode(token).role === 'USER') {
    throw new Error('Insufficient Authorization, for only ADMIN or STAFF role')
  }
}

const authorize = (ctx) => {
  const Authorization = getAuthorization(ctx)

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    jwt.verify(token, APP_SECRET)

    return true
  }

  throw new Error('Not authenticated')
}

const authorizeAndGetUser = (ctx) => {
  const Authorization = getAuthorization(ctx)

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    return jwt.verify(token, APP_SECRET)
  }

  throw new Error('Not authenticated')
}

const verifyAndGetUserId = (ctx) => {
  const Authorization = getAuthorization(ctx)

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, APP_SECRET)
    return userId
  }

  throw new Error('Not authenticated')
}

const verifyToken = token => {
  return new Promise(resolve => {
    const decoded = jwt.decode(token, { complete: true })

    if (!decoded || !decoded.header || !decoded.header.kid) {
      throw new Error('Unable to retrieve key identifier from token')
    }

    if (decoded.header.alg !== 'RS256') {
      throw new Error(
        `Wrong signature algorithm, expected RS256, got ${decoded.header.alg}`
      )
    }

    const jkwsClient = jwkRsa({
      cache: true,
      jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    })

    jkwsClient.getSigningKey(decoded.header.kid, (err, key) => {
      if (err) throw new Error(err)

      const signingKey = key.publicKey || key.rsaPublicKey

      jwt.verify(
        token,
        signingKey,
        {
          algorithms: ['RS256'],
          audience: process.env.AUTH0_API_IDENTIFIER,
          ignoreExpiration: false,
          issuer: `https://${process.env.AUTH0_DOMAIN}/`
        },
        (err, decoded) => {
          if (err) throw new Error(err)
          return resolve(decoded)
        }
      )
    })
  })
}

const getPrismaUser = (auth0UserId, ctx) => {
  const user = ctx.prisma.user({ auth0UserId })
                 .then(res => { return res })

  return user
}

const createOmiseCustomer  = async ({
  email,
  description,
}) => {
  const createdCustomer = await client.customers.create({
    email,
    description,
  },
  (error, customer) => {
    if (error) throw new Error(error)

    return customer
  })

  return createdCustomer
}

const createPrismaUser = ({
  auth0UserId,
  omiseCustomerId,
  email,
  ctx
}) => {
  const createdUser = ctx.prisma.createUser({
    auth0UserId,
    omiseCustomerId,
    email
  }).then(res => { return res })

  return createdUser
}

const fetchAuth0Email = accessToken => {
  return fetch(
    `https://${process.env.AUTH0_DOMAIN}/userinfo?access_token=${accessToken}`
  )
    .then(response => response.json())
    .then(json => json.email)
}

const generatePrismaToken = ({
  id,
  email,
  omiseCustomerId,
  role
}) => {
  return jwt.sign({
    id,
    email,
    omiseCustomerId,
    role,
    userId: id,
  }, APP_SECRET)
}

module.exports = {
  APP_SECRET,
  verifyAndGetUserId,
  authorizeAndGetUser,
  authorize,
  verifyToken,
  getPrismaUser,
  createPrismaUser,
  fetchAuth0Email,
  generatePrismaToken,
  onlyAdmin,
  onlyStaffOrAdmin,
  createOmiseCustomer
}
