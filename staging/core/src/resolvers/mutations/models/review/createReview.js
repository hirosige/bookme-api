const { authorize } = require('../../../../utils/authService')
const validateCreateReview = require('../../../validators/review/validateCreateReview')

const createReview = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateReview(args.input, ctx)

  return ctx.prisma.createReview({
    description: args.input.description,
    rating: args.input.rating,
    hotelId: args.input.hotelId,
    hotel: args.input.hotel,
    userId: args.input.userId,
    user: args.input.user,
  })
  .then(res => {
    return {
      ...res,
      hotel: ctx.prisma.review({ id: res.id }).hotel(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = createReview
