const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getSchedule = async (parent, args, ctx, info) => {
  authorize(ctx)

  let retrievedSchedule;

  try {
    retrievedSchedule = await client.schedules.retrieve(
      args.scheduleId,
      (err, schedule) => {
        if (err) throw new Error(err)

        return schedule
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return retrievedSchedule
}

module.exports = getSchedule
