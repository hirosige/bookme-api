const { authorize } = require('../../../../utils/authService')
const validateDeleteReview = require('../../../validators/review/validateDeleteReview')

const deleteReview = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteReview(args.input, ctx)

  return ctx.prisma.deleteReview({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res,
      hotel: ctx.prisma.review({ id: res.id }).hotel(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deleteReview
