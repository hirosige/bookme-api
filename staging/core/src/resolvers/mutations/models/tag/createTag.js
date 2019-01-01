const { authorize } = require('../../../../utils/authService')
const validateCreateTag = require('../../../validators/tag/validateCreateTag')

const createTag = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateTag(args.input, ctx)

  return ctx.prisma.createTag({
    color: args.input.color,
    name: args.input.name,
    postsIds: args.input.postsIds,
    posts: args.input.posts,
  })
  .then(res => {
    return {
      ...res,
      posts: ctx.prisma.tag({ id: res.id }).posts(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = createTag
