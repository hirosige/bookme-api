const { authorize } = require('../../../../utils/authService')
const validateDeletePost = require('../../../validators/post/validateDeletePost')

const deletePost = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeletePost(args.input, ctx)

  return ctx.prisma.deletePost({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res,
      author: ctx.prisma.post({ id: res.id }).author(),
      category: ctx.prisma.post({ id: res.id }).category(),
      hero: ctx.prisma.post({ id: res.id }).hero(),
      photos: ctx.prisma.post({ id: res.id }).photos(),
      tags: ctx.prisma.post({ id: res.id }).tags(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deletePost
