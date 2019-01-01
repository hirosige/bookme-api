const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getPendingDisputes = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedPendingDisputes;

  try {
    fetchedPendingDisputes = await client.disputes.listPending({
      limit: args.limit,
      offset: args.offset,
      from: args.from,
      to: args.to,
      order: args.order,
    },
    (err, disputes) => {
      if (err) throw new Error(err)

      return disputes
    })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedPendingDisputes.data
}

module.exports = getPendingDisputes
