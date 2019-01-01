const areas = (parent, args, ctx) => {
  return ctx.prisma.country({ id: parent.id }).areas()
}

const hotels = (parent, args, ctx) => {
  return ctx.prisma.country({ id: parent.id }).hotels()
}

module.exports = {
  areas,
  hotels,
}
