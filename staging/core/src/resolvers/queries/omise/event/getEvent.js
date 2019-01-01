const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getEvent = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedEvent;

  try {
    fetchedEvent = await client.events.retrieve(
      args.eventId,
      (err, aEvent) => {
        if (err) throw new Error(err)

        return aEvent
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedEvent
}

module.exports = getEvent
