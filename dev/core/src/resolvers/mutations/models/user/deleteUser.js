const { authorize } = require('../../../../utils/authService')
const validateDeleteUser = require('../../../validators/user/validateDeleteUser')

const deleteUser = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteUser(args.input, ctx)

  const profile = await ctx.prisma.user({ id: args.input.id }).profile()

  if (profile) {
    await ctx.prisma.deleteProfile({
      id: profile.id
    })
  }

  return await ctx.prisma.deleteUser({
    id: args.input.id,
  })
  .then(async (res) => {

    return {
      ...res,
      avatar: await ctx.prisma.user({ id: res.id }).avatar(),
      profile: await ctx.prisma.user({ id: res.id }).profile(),
      bookings: await ctx.prisma.user({ id: res.id }).bookings(),
      favorites: await ctx.prisma.user({ id: res.id }).favorites(),
      posts: await ctx.prisma.user({ id: res.id }).posts(),
      reviews: await ctx.prisma.user({ id: res.id }).reviews(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deleteUser
