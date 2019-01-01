const country = (parent, args, ctx) => {
  return ctx.prisma.area({ id: parent.id }).country()
}

const hotels = (parent, args, ctx) => {
  return ctx.prisma.area({ id: parent.id }).hotels()
}

module.exports = {
  country,
  hotels,
}
