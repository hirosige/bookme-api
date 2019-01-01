const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getOpenDisputes = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedOpenDisputes;

  try {
    fetchedOpenDisputes = await client.disputes.listOpen({
      limit: args.limit,
      offset: args.offset,
      from: args.from,
      to: args.to,
      order: args.order,
    },
    (err, disputes) => {
      if (err) throw new Error(err)

      return disputes
    })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedOpenDisputes.data
}

module.exports = getOpenDisputes
