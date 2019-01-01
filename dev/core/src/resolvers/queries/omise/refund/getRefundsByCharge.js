const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getRefundsByCharge = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedRefunds;

  try {
    fetchedRefunds = await client.charges.listRefunds(
      args.chargeId,
      {
        limit: args.limit,
        offset: args.offset,
        from: args.from,
        to: args.to,
        order: args.order,
      },
      (err, refunds) => {
        if (err) throw new Error(err)

        return refunds
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedRefunds.data
}

module.exports = getRefundsByCharge
