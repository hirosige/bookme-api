const { authorize } = require('../../../../utils/authService')
const validateCreateRoom = require('../../../validators/room/validateCreateRoom')

const createRoom = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateRoom(args.input, ctx)

  return ctx.prisma.createRoom({
    name: args.input.name,
    people: args.input.people,
    price: args.input.price,
    roomType: args.input.roomType,
    hotelId: args.input.hotelId,
    hotel: args.input.hotel,
    photosIds: args.input.photosIds,
    photos: args.input.photos,
  })
  .then(res => {
    return {
      ...res,
      hotel: ctx.prisma.room({ id: res.id }).hotel(),
      photos: ctx.prisma.room({ id: res.id }).photos(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = createRoom
