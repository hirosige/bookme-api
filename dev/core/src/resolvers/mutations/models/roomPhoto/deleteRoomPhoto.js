const { authorize } = require('../../../../utils/authService')
const validateDeleteRoomPhoto = require('../../../validators/roomPhoto/validateDeleteRoomPhoto')

const deleteRoomPhoto = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteRoomPhoto(args.input, ctx)

  return ctx.prisma.deleteRoomPhoto({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res,
      room: ctx.prisma.roomPhoto({ id: res.id }).room(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deleteRoomPhoto
