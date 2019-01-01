const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const deleteTransfer = async (parent, args, ctx, info) => {
  authorize(ctx)

  let deletedTransfer;

  try {
    deletedTransfer = await client.transfers.destroy(
      args.transferId,
      (err, transfer) => {
        if (err) throw new Error(err)
        return transfer
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return deletedTransfer
}

module.exports = deleteTransfer
