const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const updateDispute = async (parent, args, ctx, info) => {
  authorize(ctx)

  let updatedDispute;

  try {
    updatedDispute = await client.disputes.update(
      args.disputeId,
      { message: args.message },
      (err, dispute) => {
        if (err) throw new Error(err)

        return dispute
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return updatedDispute
}

module.exports = updateDispute
