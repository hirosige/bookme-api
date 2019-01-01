const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getCard = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedCard;

  try {
    fetchedCard = await client.customers.retrieveCard(
      args.customerId,
      args.cardId,
      (err, card) => {
        if (err) throw new Error(err)

        return card
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedCard
}

module.exports = getCard
