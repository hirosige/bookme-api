const { authorize } = require('../../../../utils/authService')
const validateUpdatePostCategory = require('../../../validators/postCategory/validateUpdatePostCategory')

const updatePostCategory = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdatePostCategory(args.input, ctx)

  return await ctx.prisma.updatePostCategory({
    data: {
      isRoot: args.input.isRoot,
      name: args.input.name,
      childrenIds: args.input.childrenIds,
      children: args.input.children,
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
      children: ctx.prisma.postCategory({ id: res.id }).children(),
      posts: ctx.prisma.postCategory({ id: res.id }).posts(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = updatePostCategory
