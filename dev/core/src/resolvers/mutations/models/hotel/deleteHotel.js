const { authorize } = require('../../../../utils/authService')
const validateDeleteHotel = require('../../../validators/hotel/validateDeleteHotel')

const deleteHotel = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteHotel(args.input, ctx)

  return ctx.prisma.deleteHotel({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res,
      area: ctx.prisma.hotel({ id: res.id }).area(),
      country: ctx.prisma.hotel({ id: res.id }).country(),
      photos: ctx.prisma.hotel({ id: res.id }).photos(),
      advantages: ctx.prisma.hotel({ id: res.id }).advantages(),
      bookings: ctx.prisma.hotel({ id: res.id }).bookings(),
      favorites: ctx.prisma.hotel({ id: res.id }).favorites(),
      reviews: ctx.prisma.hotel({ id: res.id }).reviews(),
      rooms: ctx.prisma.hotel({ id: res.id }).rooms(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deleteHotel
