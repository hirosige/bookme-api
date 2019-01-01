const {
  verifyToken,
  createPrismaUser,
  getPrismaUser,
  createOmiseCustomer,
  fetchAuth0Email,
  generatePrismaToken,
} = require('../../../../utils/authService')
const userAlgoliaSync = require('../../../subscriptions/algolia/userAlgoliaSync')

const authenticateUser = async (parent, args, ctx, info) => {
  try {
    if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_API_IDENTIFIER) {
      throw new Error(
        'Missing AUTH0_DOMAIN or AUTH0_API_IDENTIFIER environment variable'
      )
    }

    const accessToken = args.accessToken
    const decodedToken = await verifyToken(accessToken)
    let prismaUser = await getPrismaUser(decodedToken.sub, ctx)

    if (prismaUser === null) {
      let email = null

      if (decodedToken.scope.includes('email')) {
        email = await fetchAuth0Email(accessToken)
      }

      const omiseCustomer = await createOmiseCustomer({
        email,
        description: "test",
      })

      prismaUser = await createPrismaUser({
        auth0UserId: decodedToken.sub,
        omiseCustomerId: omiseCustomer.id,
        email,
        ctx
      })
    }

    userAlgoliaSync(prismaUser)

    return {
      id: prismaUser.id,
      token: generatePrismaToken({
        id: prismaUser.id,
        email: prismaUser.email,
        omiseCustomerId: prismaUser.omiseCustomerId,
        role: prismaUser.role
      }),
    }
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = authenticateUser