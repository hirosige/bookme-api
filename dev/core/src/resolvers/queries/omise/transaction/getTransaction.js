const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getTransaction = async (parent, args, ctx, info) => {
  authorize(ctx)

  let retrievedTransaction;

  try {
    retrievedTransaction = await client.transactions.retrieve(
      args.transactionId,
      (err, transaction) => {
        if (err) throw new Error(err)

        return transaction
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return retrievedTransaction
}

module.exports = getTransaction
