const { authorize } = require('../../../../utils/authService')
const validateUpdateRoomPhoto = require('../../../validators/roomPhoto/validateUpdateRoomPhoto')

const updateRoomPhoto = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdateRoomPhoto(args.input, ctx)

  return await ctx.prisma.updateRoomPhoto({
    data: {
      cdnUrl: args.input.cdnUrl,
      isImage: args.input.isImage,
      isStored: args.input.isStored,
      mimeType: args.input.mimeType,
      name: args.input.name,
      size: args.input.size,
      uuid: args.input.uuid,
      roomId: args.input.roomId,
      room: args.input.room,
    },
    where: {
      id: args.input.id
    }
  })
  .then(res => {
    return {
      ...res,
      room: ctx.prisma.roomPhoto({ id: res.id }).room(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = updateRoomPhoto
