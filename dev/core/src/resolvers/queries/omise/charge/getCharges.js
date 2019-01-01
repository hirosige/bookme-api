const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getCharges = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedCharges;

  try {
    fetchedCharges = await client.charges.list({
      limit: args.limit,
      offset: args.offset,
      from: args.from,
      to: args.to,
      order: args.order,
    },
    (err, charges) => {
      if (err) throw new Error(err)

      return charges
    })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedCharges.data
}

module.exports = getCharges
