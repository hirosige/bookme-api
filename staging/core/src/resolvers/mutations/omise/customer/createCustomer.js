const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const createCustomer = async (parent, args, ctx, info) => {
  authorize(ctx)

  const createdCustomer = await client.customers.create({
    email: args.email,
    description: args.description,
    metadata: args.metadata,
  },
  (error, customer) => {
    if (error) {
      throw new Error(error)
    }

    return customer
  })

  return createdCustomer
}

module.exports = createCustomer
