const { authorize } = require('../../../../utils/authService')
const validateCreateArea = require('../../../validators/area/validateCreateArea')

const createArea = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateArea(args.input, ctx)

  return ctx.prisma.createArea({
    code: args.input.code,
    name: args.input.name,
    slug: args.input.slug,
    country: { connect: { id: args.input.countryId } },
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

module.exports = createArea
