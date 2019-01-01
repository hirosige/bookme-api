const { authorize } = require('../../../../utils/authService')
const validateUpdatePostHero = require('../../../validators/postHero/validateUpdatePostHero')

const updatePostHero = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdatePostHero(args.input, ctx)

  return await ctx.prisma.updatePostHero({
    data: {
      cdnUrl: args.input.cdnUrl,
      isImage: args.input.isImage,
      isStored: args.input.isStored,
      mimeType: args.input.mimeType,
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
      post: ctx.prisma.postHero({ id: res.id }).post(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = updatePostHero
