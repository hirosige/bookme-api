const { authorize } = require('../../../../utils/authService')
const validateCreatePostPhotos = require('../../../validators/postPhotos/validateCreatePostPhotos')

const createPostPhotos = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreatePostPhotos(args.input, ctx)

  return ctx.prisma.createPostPhotos({
    cdnUrl: args.input.cdnUrl,
    count: args.input.count,
    isImage: args.input.isImage,
    isStored: args.input.isStored,
    name: args.input.name,
    size: args.input.size,
    uuid: args.input.uuid,
    postId: args.input.postId,
    post: args.input.post,
  })
  .then(res => {
    return {
      ...res,
      post: ctx.prisma.postPhotos({ id: res.id }).post(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = createPostPhotos
