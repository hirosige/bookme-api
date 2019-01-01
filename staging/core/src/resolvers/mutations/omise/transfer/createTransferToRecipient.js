const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const createTransfer = async (parent, args, ctx, info) => {
  authorize(ctx)

  let createdTransfer;

  try {
    createdTransfer = await client.transfers.create(
      {
        amount: args.amount,
        recipient: args.recipientId,
      },
      (error, transfer) => {
        if (error) {
          return { error: error }
        }

        return transfer
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return createdTransfer
}

module.exports = createTransfer
