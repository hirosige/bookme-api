const { authorize } = require('../../../../utils/authService')
const validateCreateCountry = require('../../../validators/country/validateCreateCountry')

const createCountry = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateCountry(args.input, ctx)

  return ctx.prisma.createCountry({
    code: args.input.code,
    name: args.input.name,
    slug: args.input.slug,
    areasIds: args.input.areasIds,
    areas: args.input.areas,
    hotelsIds: args.input.hotelsIds,
    hotels: args.input.hotels,
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

module.exports = createCountry
