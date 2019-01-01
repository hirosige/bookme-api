const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getRecipient = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedRecipient;

  try {
    fetchedRecipient = await client.recipients.retrieve(
      args.recipientId,
      (err, recipient) => {
        if (err) throw new Error(err)

        return recipient
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedRecipient
}

module.exports = getRecipient
