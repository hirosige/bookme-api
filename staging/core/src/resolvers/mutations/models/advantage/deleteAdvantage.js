const { authorize } = require('../../../../utils/authService')
const validateDeleteAdvantage = require('../../../validators/advantage/validateDeleteAdvantage')

const deleteAdvantage = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteAdvantage(args.input, ctx)

  return ctx.prisma.deleteAdvantage({
    id: args.input.id,
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

module.exports = deleteAdvantage
