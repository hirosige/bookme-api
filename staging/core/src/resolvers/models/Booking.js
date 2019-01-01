const hotel = (parent, args, ctx) => {
  return ctx.prisma.booking({ id: parent.id }).hotel()
}

const user = (parent, args, ctx) => {
  return ctx.prisma.booking({ id: parent.id }).user()
}

module.exports = {
  hotel,
  user,
}
