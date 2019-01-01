const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getTransfers = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedTransfers;

  try {
    fetchedTransfers = await client.transfers.list(
      {
        limit: args.limit,
        offset: args.offset,
        from: args.from,
        to: args.to,
        order: args.order,
      },
      (err, transfers) => {
        if (err) throw new Error(err)

        return transfers
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedTransfers.data
}

module.exports = getTransfers
