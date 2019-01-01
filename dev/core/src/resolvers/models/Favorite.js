const user = (parent, args, ctx) => {
  return ctx.prisma.favorite({ id: parent.id }).user()
}

const hotels = (parent, args, ctx) => {
  return ctx.prisma.favorite({ id: parent.id }).hotels()
}

module.exports = {
  user,
  hotels
}
