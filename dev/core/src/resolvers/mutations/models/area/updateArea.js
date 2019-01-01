const { authorize } = require('../../../../utils/authService')
const validateUpdateArea = require('../../../validators/area/validateUpdateArea')

const updateArea = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdateArea(args.input, ctx)

  return await ctx.prisma.updateArea({
    data: {
      code: args.input.code,
      name: args.input.name,
      slug: args.input.slug,
      country: { connect: { id: args.input.countryId } },
    },
    where: {
      id: args.input.id
    }
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

module.exports = updateArea
