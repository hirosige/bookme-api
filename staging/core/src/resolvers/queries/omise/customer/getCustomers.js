const {
  authorize,
  onlyStaffOrAdmin,
} = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getCustomers = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedCustomers;

  try {
    fetchedCustomers = await client.customers.list({
      limit: args.limit,
      offset: args.offset,
      from: args.from,
      to: args.to,
      order: args.order,
    },
    (err, customers) => {
      if (err) throw new Error(err)

      return customers
    })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedCustomers.data
}

module.exports = getCustomers
