const { authorize } = require('../../../../utils/authService')
const validateDeleteCountry = require('../../../validators/country/validateDeleteCountry')

const deleteCountry = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteCountry(args.input, ctx)

  return ctx.prisma.deleteCountry({
    id: args.input.id,
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

module.exports = deleteCountry
