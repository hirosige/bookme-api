const { authorize } = require('../../../../utils/authService')
const validateUpdateAdvantage = require('../../../validators/advantage/validateUpdateAdvantage')

const updateAdvantage = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdateAdvantage(args.input, ctx)

  return await ctx.prisma.updateAdvantage({
      data: {
        iconName: args.input.iconName,
        name: args.input.name,
        iconId: args.input.iconId,
        icon: args.input.icon,
        hotelsIds: args.input.hotelsIds,
        hotels: args.input.hotels,
      },
      where: {
        id: args.input.id
      }
    })
    .then(res => {
      return {
        ...res,
        icon: ctx.prisma.advantage({ id: res.id }).icon(),
        hotels: ctx.prisma.advantage({ id: res.id }).hotels(),
      }
    })
    .catch(err => { throw new Error(err) })
}

module.exports = updateAdvantage
