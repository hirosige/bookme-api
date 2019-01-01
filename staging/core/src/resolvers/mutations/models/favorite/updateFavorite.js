const { authorize } = require('../../../../utils/authService')
const validateUpdateFavorite = require('../../../validators/favorite/validateUpdateFavorite')

const updateFavorite = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdateFavorite(args.input, ctx)

  return await ctx.prisma.updateFavorite({
    data: {
      hotelsId: args.input.input.hotelsId,
      hotels: args.input.input.hotels,
      userId: args.input.input.userId,
      user: args.input.input.user,
    },
    where: {
      id: args.input.id
    }
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

module.exports = updateFavorite
