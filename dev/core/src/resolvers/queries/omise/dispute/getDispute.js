const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getDispute = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedDispute;

  try {
    fetchedDispute = await client.disputes.retrieve(
      args.disputeId,
      (err, dispute) => {
        if (err) throw new Error(err)

        return dispute
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedDispute
}

module.exports = getDispute
