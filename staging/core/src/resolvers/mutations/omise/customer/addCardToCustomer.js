const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const addCardToCustomer = async (parent, args, ctx, info) => {
  authorize(ctx)

  let cardAddedCustomer;

  try {
    cardAddedCustomer = await client.customers.update(
      args.customerId,
      { card: args.cardToken },
      (err, customer) => {
        if (err) throw new Error(err)

        return customer
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return cardAddedCustomer
}

module.exports = addCardToCustomer
