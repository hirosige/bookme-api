const { authorize } = require('../../../../utils/authService')
const validateUpdateReview = require('../../../validators/review/validateUpdateReview')

const updateReview = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdateReview(args.input, ctx)

  return await ctx.prisma.updateReview({
    data: {
      description: args.input.description,
      rating: args.input.rating,
      hotelId: args.input.hotelId,
      hotel: args.input.hotel,
      userId: args.input.userId,
      user: args.input.user,
    },
    where: {
      id: args.input.id
    }
  })
  .then(res => {
    return {
      ...res,
      hotel: ctx.prisma.review({ id: res.id }).hotel(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = updateReview
