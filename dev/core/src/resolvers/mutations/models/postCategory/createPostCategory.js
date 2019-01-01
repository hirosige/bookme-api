const { authorize } = require('../../../../utils/authService')
const validateCreatePostCategory = require('../../../validators/postCategory/validateCreatePostCategory')

const createPostCategory = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreatePostCategory(args.input, ctx)

  return ctx.prisma.createPostCategory({
    isRoot: args.input.isRoot,
    name: args.input.name,
    childrenIds: args.input.childrenIds,
    children: args.input.children,
    postsIds: args.input.postsIds,
    posts: args.input.posts,
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

module.exports = createPostCategory
