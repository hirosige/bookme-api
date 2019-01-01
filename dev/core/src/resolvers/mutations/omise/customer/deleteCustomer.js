const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const deleteCustomer = async (parent, args, ctx, info) => {
  authorize(ctx)

  let deletedCustomer;

  try {
    deletedCustomer = await client.customers.destroy(
      args.customerId,
      (err, customer) => {
        if (err) throw new Error(err)

        return customer
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return deletedCustomer
}

module.exports = deleteCustomer
