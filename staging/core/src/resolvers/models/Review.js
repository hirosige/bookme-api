const hotel = (parent, args, ctx) => {
  return ctx.prisma.review({ id: parent.id }).hotel()
}

const user = (parent, args, ctx) => {
  return ctx.prisma.review({ id: parent.id }).user()
}

module.exports = {
  user,
  hotel,
}
