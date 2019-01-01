const { authorize } = require('../../../../utils/authService')
const validateCreateAdvantage = require('../../../validators/advantage/validateCreateAdvantage')

const createAdvantage = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateAdvantage(args.input, ctx)

  console.log(args.input)

  return ctx.prisma.createAdvantage({
    iconName: args.input.iconName,
    name: args.input.name,
    iconId: args.input.iconId,
    icon: args.input.icon,
    hotelsIds: args.input.hotelsIds,
    hotels: args.input.hotels,
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

module.exports = createAdvantage
