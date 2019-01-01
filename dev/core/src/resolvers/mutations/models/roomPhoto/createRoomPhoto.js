const { authorize } = require('../../../../utils/authService')
const validateCreateRoomPhoto = require('../../../validators/roomPhoto/validateCreateRoomPhoto')

const createRoomPhoto = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateRoomPhoto(args.input, ctx)

  return ctx.prisma.createRoomPhoto({
    cdnUrl: args.input.cdnUrl,
    isImage: args.input.isImage,
    isStored: args.input.isStored,
    mimeType: args.input.mimeType,
    name: args.input.name,
    size: args.input.size,
    uuid: args.input.uuid,
    roomId: args.input.roomId,
    room: args.input.room,
  })
  .then(res => {
    return {
      ...res,
      room: ctx.prisma.roomPhoto({ id: res.id }).room(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = createRoomPhoto
