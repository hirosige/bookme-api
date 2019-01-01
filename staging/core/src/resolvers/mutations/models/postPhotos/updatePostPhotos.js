const { authorize } = require('../../../../utils/authService')
const validateUpdatePostPhotos = require('../../../validators/postPhotos/validateUpdatePostPhotos')

const updatePostPhotos = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdatePostPhotos(args.input, ctx)

  return await ctx.prisma.updatePostPhotos({
    data: {
      cdnUrl: args.input.cdnUrl,
      count: args.input.count,
      isImage: args.input.isImage,
      isStored: args.input.isStored,
      name: args.input.name,
      size: args.input.size,
      uuid: args.input.uuid,
      postId: args.input.postId,
      post: args.input.post,
    },
    where: {
      id: args.input.id
    }
  })
  .then(res => {
    return {
      ...res,
      post: ctx.prisma.postPhotos({ id: res.id }).post(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = updatePostPhotos
