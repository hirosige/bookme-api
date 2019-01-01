const { authorize } = require('../../../../utils/authService')
const validateUpdateCountry = require('../../../validators/country/validateUpdateCountry')

const updateCountry = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdateCountry(args.input, ctx)

  return await ctx.prisma.updateCountry({
    data: {
      code: args.input.code,
      name: args.input.name,
      slug: args.input.slug,
      areasIds: args.input.areasIds,
      areas: args.input.areas,
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
      areas: ctx.prisma.country({ id: res.id }).areas(),
      hotels: ctx.prisma.country({ id: res.id }).hotels(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = updateCountry
