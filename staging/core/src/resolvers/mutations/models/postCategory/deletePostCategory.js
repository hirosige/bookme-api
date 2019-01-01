const { authorize } = require('../../../../utils/authService')
const validateDeletePostCategory = require('../../../validators/postCategory/validateDeletePostCategory')

const deletePostCategory = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeletePostCategory(args.input, ctx)

  return ctx.prisma.deletePostCategory({
    id: args.input.id,
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

module.exports = deletePostCategory
