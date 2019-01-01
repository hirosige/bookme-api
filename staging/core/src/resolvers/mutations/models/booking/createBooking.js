const { authorize } = require('../../../../utils/authService')
const validateCreateBooking = require('../../../validators/booking/validateCreateBooking')

const createBooking = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateBooking(args.input, ctx)

  return ctx.prisma.createBooking({
    checkIn: args.input.checkIn,
    checkOut: args.input.checkOut,
    isConfirmed: args.input.isConfirmed,
    isPaid: args.input.isPaid,
    nights: args.input.nights,
    qty: args.input.qty,
    totalAmount: args.input.totalAmount,
    hotelId: args.input.hotelId,
    hotel: args.input.hotel,
    userId: args.input.userId,
    user: args.input.user,
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

module.exports = createBooking
