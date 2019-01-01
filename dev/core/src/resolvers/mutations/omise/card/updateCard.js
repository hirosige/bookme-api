const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const updateCard = async (parent, args, ctx, info) => {
  authorize(ctx)

  let updatedCard;

  try {
    updatedCard = await client.customers.updateCard(
      args.customerId,
      args.cardId,
      {
        expiration_month: args.expirationMonth,
        expiration_year: args.expirationYear,
        name: args.name,
        postal_code: args.postalCode
      },
      function(err, card) {
        if (err) throw new Error(err)

        return card
      }
    )
  } catch(e) {
    throw new Error(e.message)
  }

  return updatedCard
}

module.exports = updateCard
