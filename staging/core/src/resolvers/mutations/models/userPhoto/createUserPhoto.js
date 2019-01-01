const { authorize } = require('../../../../utils/authService')
const validateCreateUserPhoto = require('../../../validators/userPhoto/validateCreateUserPhoto')

const createUserPhoto = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateUserPhoto(args.input, ctx)

  return ctx.prisma.createUserPhoto({
    cdnUrl: args.input.cdnUrl,
    isImage: args.input.isImage,
    isStored: args.input.isStored,
    mimeType: args.input.mimeType,
    name: args.input.name,
    size: args.input.size,
    uuid: args.input.uuid,
    userId: args.input.userId,
    user: args.input.user,
  })
  .then(res => {
    return {
      ...res,
      user: ctx.prisma.userPhoto({ id: res.id }).user(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = createUserPhoto
