const { authorize } = require('../../../../utils/authService')
const validateCreateAdvantage = require('../../../validators/advantage/validateCreateAdvantage')

const addToChildren = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateAdvantage(args.input, ctx)

  const children1 = await ctx.prisma.updatePostCategory({
    data: { children: { connect: { id: args.input.children2PostCategoryId }}},
    where: { id: args.input.children1PostCategoryId }
  })
  .then(res => {
    return { ...res }
  })
  .catch(err => { throw new Error(err) })

  const children2 = await ctx.prisma.updatePostCategory({
    data: { children: { connect: { id: args.input.children1PostCategoryId }}},
    where: { id: args.input.children2PostCategoryId }
  })
  .then(res => {
    return { ...res }
  })
  .catch(err => { throw new Error(err) })

  return {
    parent: children1,
    target: children2
  }
}

module.exports = addToChildren
