const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getEvents = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedEvents;

  try {
    fetchedEvents = await client.events.list({
      limit: args.limit,
      offset: args.offset,
      from: args.from,
      to: args.to,
      order: args.order,
    },
    (err, events) => {
      if (err) throw new Error(err)

      return events
    })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedEvents.data
}

module.exports = getEvents
