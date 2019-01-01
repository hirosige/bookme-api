const axios = require('axios')
const { authorize } = require('../../../../utils/authService')

const getRefunds = async (parent, args, ctx, info) => {
  authorize(ctx)

  const REFUND_URL =
    `https://api.omise.co/refunds`

  let fetchedRefunds;

  try {
    fetchedRefunds = await axios.get(REFUND_URL, {
      params: {
        limit: args.limit,
        offset: args.offset,
        from: args.from,
        to: args.to,
        order: args.order,
      },
      auth: {
        username: process.env.OMISE_SECRET_KEY
      }
    })
      .then(response => {
        return response.data
      }).catch(err => {
        throw new Error(err)
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedRefunds.data
}

module.exports = getRefunds
