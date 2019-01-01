const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const updateTransfer = async (parent, args, ctx, info) => {
  authorize(ctx)

  let updatedTransfer;

  try {
    updatedTransfer = await client.transfers.update(
      args.transferId,
      { amount: args.amount },
      (error, transfer) => {
        if (error) {
          return { error: error }
        }

        return transfer
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return updatedTransfer
}

module.exports = updateTransfer
