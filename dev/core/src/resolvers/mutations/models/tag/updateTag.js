const { authorize } = require('../../../../utils/authService')
const validateUpdateTag = require('../../../validators/tag/validateUpdateTag')

const updateTag = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdateTag(args.input, ctx)

  return await ctx.prisma.updateTag({
    data: {
      color: args.input.color,
      name: args.input.name,
      postsIds: args.input.postsIds,
      posts: args.input.posts,
    },
    where: {
      id: args.input.id
    }
  })
  .then(res => {
    return {
      ...res,
      posts: ctx.prisma.tag({ id: res.id }).posts(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = updateTag
