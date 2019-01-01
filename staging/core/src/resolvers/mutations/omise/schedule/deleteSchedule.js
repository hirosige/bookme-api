const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const deleteSchedule = async (parent, args, ctx, info) => {
  authorize(ctx)

  let deletedSchedule;

  try {
    deletedSchedule = await client.schedules.destroy(
      args.scheduleId,
      (err, schedule) => {
        if (err) throw new Error(err)

        return schedule
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return deletedSchedule
}

module.exports = deleteSchedule
