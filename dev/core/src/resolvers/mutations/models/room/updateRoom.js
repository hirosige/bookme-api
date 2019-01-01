const { authorize } = require('../../../../utils/authService')
const validateUpdateRoom = require('../../../validators/room/validateUpdateRoom')

const updateRoom = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdateRoom(args.input, ctx)

  return await ctx.prisma.updateRoom({
    data: {
      name: args.input.name,
      people: args.input.people,
      price: args.input.price,
      roomType: args.input.roomType,
      hotelId: args.input.hotelId,
      hotel: args.input.hotel,
      photosIds: args.input.photosIds,
      photos: args.input.photos,
    },
    where: {
      id: args.input.id
    }
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

module.exports = updateRoom
