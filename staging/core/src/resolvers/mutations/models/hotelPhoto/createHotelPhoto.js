const { authorize } = require('../../../../utils/authService')
const validateCreateHotelPhoto = require('../../../validators/hotelPhoto/validateCreateHotelPhoto')

const createHotelPhoto = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateHotelPhoto(args.input, ctx)

  return ctx.prisma.createHotelPhoto({
    cdnUrl: args.input.cdnUrl,
    count: args.input.count,
    isImage: args.input.isImage,
    isStored: args.input.isStored,
    name: args.input.name,
    size: args.input.size,
    uuid: args.input.uuid,
    hotelId: args.input.hotelId,
    hotel: args.input.hotel,
  })
  .then(res => {
    return {
      ...res,
      hotel: ctx.prisma.hotelPhoto({ id: res.id }).hotel(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = createHotelPhoto
