const { authorize } = require('../../../../utils/authService')
const validateDeletePostPhotos = require('../../../validators/postPhotos/validateDeletePostPhotos')

const deletePostPhotos = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeletePostPhotos(args.input, ctx)

  return ctx.prisma.deletePostPhotos({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res,
      post: ctx.prisma.postPhotos({ id: res.id }).post(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deletePostPhotos
