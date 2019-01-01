const avatar = (parent, args, ctx) => {
  return ctx.prisma.user({ id: parent.id }).avatar()
}

const posts = (parent, args, ctx) => {
  return ctx.prisma.user({ id: parent.id }).posts()
}

const profile = (parent, args, ctx) => {
  return ctx.prisma.user({ id: parent.id }).profile()
}

const favorites = (parent, args, ctx) => {
  return ctx.prisma.user({ id: parent.id }).favorites()
}

const bookings = (parent, args, ctx) => {
  return ctx.prisma.user({ id: parent.id }).bookings()
}

const reviews = (parent, args, ctx) => {
  return ctx.prisma.user({ id: parent.id }).reviews()
}

module.exports = {
  avatar,
  posts,
  profile,
  favorites,
  bookings,
  reviews,
}
