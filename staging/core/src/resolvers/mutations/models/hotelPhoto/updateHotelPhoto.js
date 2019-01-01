const { authorize } = require('../../../../utils/authService')
const validateUpdateHotelPhoto = require('../../../validators/hotelPhoto/validateUpdateHotelPhoto')

const updateHotelPhoto = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdateHotelPhoto(args.input, ctx)

  return await ctx.prisma.updateHotelPhoto({
    data: {
      cdnUrl: args.input.cdnUrl,
      count: args.input.count,
      isImage: args.input.isImage,
      isStored: args.input.isStored,
      name: args.input.name,
      size: args.input.size,
      uuid: args.input.uuid,
      hotelId: args.input.hotelId,
      hotel: args.input.hotel,
    },
    where: {
      id: args.input.id
    }
  })
  .then(res => {
    return {
      ...res,
      hotel: ctx.prisma.hotelPhoto({ id: res.id }).hotel(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = updateHotelPhoto
