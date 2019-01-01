const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getCards = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedCards;

  try {
    fetchedCards = await client.customers.listCards(
      args.customerId,
      {
        limit: args.limit,
        offset: args.offset,
      },
      (err, cards) => {
        if (err) throw new Error(err)

        return cards
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedCards.data
}

module.exports = getCards
