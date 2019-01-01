const room = (parent, args, ctx) => {
  return ctx.prisma.roomPhoto({ id: parent.id }).room()
}

module.exports = {
  room,
}
