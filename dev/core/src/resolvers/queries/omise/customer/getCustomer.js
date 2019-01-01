const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getCustomer = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedCustomer;

  try {
    fetchedCustomer = await client.customers.retrieve(
      args.customerId,
      (err, customer) => {
        if (err) throw new Error(err)

        return customer
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedCustomer
}

module.exports = getCustomer
