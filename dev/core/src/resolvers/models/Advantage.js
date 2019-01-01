const icon = (parent, args, ctx) => {
  return ctx.prisma.advantage({ id: parent.id }).icon()
}

const hotels = (parent, args, ctx) => {
  return ctx.prisma.advantage({ id: parent.id }).hotels()
}

module.exports = {
  icon,
  hotels,
}
