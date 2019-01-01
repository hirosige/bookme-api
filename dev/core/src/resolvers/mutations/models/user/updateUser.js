const { authorize } = require('../../../../utils/authService')
const validateUpdateUser = require('../../../validators/user/validateUpdateUser')

const updateUser = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdateUser(args.input, ctx)

  return await ctx.prisma.updateUser({
    data: {
      auth0UserId: args.input.auth0UserId,
      email: args.input.email,
      omiseCustomerId: args.input.omiseCustomerId,
      role: args.input.role,
      avatarId: args.input.avatarId,
      avatar: args.input.avatar,
      profileId: args.input.profileId,
      profile: args.input.profile,
      bookingsIds: args.input.bookingsIds,
      bookings: args.input.bookings,
      favoritesIds: args.input.favoritesIds,
      favorites: args.input.favorites,
      postsIds: args.input.postsIds,
      posts: args.input.posts,
      reviewsIds: args.input.reviewsIds,
      reviews: args.input.reviews,
    },
    where: {
      id: args.input.id
    }
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

module.exports = updateUser
