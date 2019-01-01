const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getRecipients = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedRecipients;

  try {
    fetchedRecipients = await client.recipients.list({
      limit: args.limit,
      offset: args.offset,
      from: args.from,
      to: args.to,
      order: args.order,
    },
    (err, recipients) => {
      if (err) throw new Error(err)

      return recipients
    })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedRecipients.data
}

module.exports = getRecipients
