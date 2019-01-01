const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getSchedules = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedSchedules;

  try {
    fetchedSchedules = await client.schedules.retrieve(
      (err, schedules) => {
        if (err) throw new Error(err)

        return schedules
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedSchedules.data
}

module.exports = getSchedules
