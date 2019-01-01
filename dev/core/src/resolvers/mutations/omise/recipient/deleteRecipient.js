const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const deleteRecipient = async (parent, args, ctx, info) => {
  authorize(ctx)

  let deletedRecipient;

  try {
    deletedRecipient = await client.recipients.destroy(
      args.recipientId,
      (err, recipient) => {
        if (err) throw new Error(err)

        return recipient
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return deletedRecipient
}

module.exports = deleteRecipient
