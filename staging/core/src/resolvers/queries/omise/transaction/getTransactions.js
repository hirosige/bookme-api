const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getTransactions = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedTransactions;

  try {
    fetchedTransactions = await client.transactions.list(
      {
        limit: args.limit,
        offset: args.offset,
        from: args.from,
        to: args.to,
        order: args.order,
      },
      (err, transactions) => {
        if (err) throw new Error(err)

        return transactions
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedTransactions.data
}

module.exports = getTransactions
