const { authorize } = require('../../../../utils/authService')
const validateDeletePostHero = require('../../../validators/postHero/validateDeletePostHero')

const deletePostHero = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeletePostHero(args.input, ctx)

  return ctx.prisma.deletePostHero({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res,
      post: ctx.prisma.postHero({ id: res.id }).post(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deletePostHero
