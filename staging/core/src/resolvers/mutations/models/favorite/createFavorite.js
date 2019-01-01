const { authorize } = require('../../../../utils/authService')
const validateCreateFavorite = require('../../../validators/favorite/validateCreateFavorite')

const createFavorite = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateFavorite(args.input, ctx)

  return ctx.prisma.createFavorite({
    hotelsId: args.input.input.hotelsId,
    hotels: args.input.input.hotels,
    userId: args.input.input.userId,
    user: args.input.input.user,
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

module.exports = createFavorite
