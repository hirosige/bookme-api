const { authorize } = require('../../../../utils/authService')
const validateDeleteArea = require('../../../validators/area/validateDeleteArea')

const deleteArea = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteArea(args.input, ctx)

  return ctx.prisma.deleteArea({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res,
      country: ctx.prisma.area({ id: res.id }).country(),
      hotels: ctx.prisma.area({ id: res.id }).hotels(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deleteArea
