const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const createRefund = async (parent, args, ctx, info) => {
  authorize(ctx)

  let createdRefund;

  try {
    createdRefund = await client.charges.createRefund(
      args.chargeId,
      { amount: args.amount },
      (err, refund) => {
        if (err) throw new Error(err)

        return refund
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return createdRefund
}

module.exports = createRefund
