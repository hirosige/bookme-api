const { authorize } = require('../../../../utils/authService')
const validateDeleteUser = require('../../../validators/user/validateDeleteUser')

const deleteUser = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteUser(args.input, ctx)

  return ctx.prisma.deleteUser({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res,
      avatar: ctx.prisma.user({ id: res.id }).avatar(),
      profile: ctx.prisma.user({ id: res.id }).profile(),
      bookings: ctx.prisma.user({ id: res.id }).bookings(),
      favorites: ctx.prisma.user({ id: res.id }).favorites(),
      posts: ctx.prisma.user({ id: res.id }).posts(),
      reviews: ctx.prisma.user({ id: res.id }).reviews(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deleteUser
