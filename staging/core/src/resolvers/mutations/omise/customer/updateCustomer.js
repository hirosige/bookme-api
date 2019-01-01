const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const updateCustomer = async (parent, args, ctx, info) => {
  authorize(ctx)

  let updatedCustomer;

  try {
    updatedCustomer = await client.customers.update({
      email: args.email,
      description: args.description,
      metadata: args.metadata,
      default_card: args.defaultCard
    },
    (err, customer) => {
      if (err) throw new Error(err)

      return customer
    })
  } catch(e) {
    throw new Error(e.message)
  }

  return updatedCustomer
}

module.exports = updateCustomer
