const { authorize } = require('../../../../utils/authService')
const validateCreatePostHero = require('../../../validators/postHero/validateCreatePostHero')

const createPostHero = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreatePostHero(args.input, ctx)

  return ctx.prisma.createPostHero({
    cdnUrl: args.input.cdnUrl,
    isImage: args.input.isImage,
    isStored: args.input.isStored,
    mimeType: args.input.mimeType,
    name: args.input.name,
    size: args.input.size,
    uuid: args.input.uuid,
    postId: args.input.postId,
    post: args.input.post,
  })
  .then(res => {
    return {
      ...res,
      post: ctx.prisma.postHero({ id: res.id }).post(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = createPostHero
