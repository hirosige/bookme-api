const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const deleteCard = async (parent, args, ctx, info) => {
  authorize(ctx)

  let deletedCard;

  try {
    deletedCard = await client.customers.destroyCard(
      args.customerId,
      args.cardId,
      (err, card) => {
        if (err) throw new Error(err)

        return card
      }
    )
  } catch(e) {
    throw new Error(e.message)
  }

  return deletedCard
}

module.exports = deleteCard
