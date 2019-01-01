const { authorize } = require('../../../../utils/authService')
const validateDeleteTag = require('../../../validators/tag/validateDeleteTag')

const deleteTag = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteTag(args.input, ctx)

  return ctx.prisma.deleteTag({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res,
      posts: ctx.prisma.tag({ id: res.id }).posts(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deleteTag
