const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const createCustomerWithCard = async (parent, args, ctx, info) => {
  authorize(ctx)

  let createdCustomer;

  try {
    createdCustomer = await client.customers.create({
      email: args.email,
      description: args.description,
      metadata: args.metadata,
      card: args.cardToken,
    },
    (err, customer) => {
      if (err) throw new Error(err)

      return customer
    })
  } catch(e) {
    throw new Error(e.message)
  }

  return createdCustomer
}

module.exports = createCustomerWithCard
