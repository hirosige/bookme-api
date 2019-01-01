const { authorize } = require('../../../../utils/authService')
const validateDeleteRoom = require('../../../validators/room/validateDeleteRoom')

const deleteRoom = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteRoom(args.input, ctx)

  return ctx.prisma.deleteRoom({
    id: args.input.id,
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

module.exports = deleteRoom
