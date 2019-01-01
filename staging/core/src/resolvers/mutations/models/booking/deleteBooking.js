const { authorize } = require('../../../../utils/authService')
const validateDeleteBooking = require('../../../validators/booking/validateDeleteBooking')

const deleteBooking = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteBooking(args.input, ctx)

  return ctx.prisma.deleteBooking({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res,
      hotel: ctx.prisma.booking({ id: res.id }).hotel(),
      user: ctx.prisma.booking({ id: res.id }).user(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deleteBooking
