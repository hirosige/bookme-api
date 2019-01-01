const { authorize } = require('../../../../utils/authService')
const validateUpdateUserPhoto = require('../../../validators/userPhoto/validateUpdateUserPhoto')

const updateUserPhoto = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdateUserPhoto(args.input, ctx)

  return await ctx.prisma.updateUserPhoto({
    data: {
      cdnUrl: args.input.cdnUrl,
      isImage: args.input.isImage,
      isStored: args.input.isStored,
      mimeType: args.input.mimeType,
      name: args.input.name,
      size: args.input.size,
      uuid: args.input.uuid,
      userId: args.input.userId,
      user: args.input.user,
    },
    where: {
      id: args.input.id
    }
  })
  .then(res => {
    return {
      ...res
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = updateUserPhoto
