const { authorize } = require('../../../../utils/authService')
const validateDeleteHotelPhoto = require('../../../validators/hotelPhoto/validateDeleteHotelPhoto')

const deleteHotelPhoto = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteHotelPhoto(args.input, ctx)

  return ctx.prisma.deleteHotelPhoto({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res,
      hotel: ctx.prisma.hotelPhoto({ id: res.id }).hotel(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deleteHotelPhoto
