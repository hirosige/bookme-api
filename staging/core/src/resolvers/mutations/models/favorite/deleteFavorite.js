const { authorize } = require('../../../../utils/authService')
const validateDeleteFavorite = require('../../../validators/favorite/validateDeleteFavorite')

const deleteFavorite = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteFavorite(args.input, ctx)

  return ctx.prisma.deleteFavorite({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res,
      hotels: ctx.prisma.favorite({ id: res.id }).hotels(),
      user: ctx.prisma.favorite({ id: res.id }).user(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deleteFavorite
