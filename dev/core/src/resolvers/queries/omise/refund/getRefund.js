const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getRefund = async (parent, args, ctx, info) => {
  authorize(ctx)

  let retrievedRefund;

  try {
    retrievedRefund = await client.charges.retrieveRefund(
      args.chargeId,
      args.refundId,
      (err, refund) => {
        if (err) throw new Error(err)

        return refund
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return retrievedRefund
}

module.exports = getRefund
