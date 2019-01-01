const user = (parent, args, ctx) => {
  return ctx.prisma.profile({ id: parent.id }).user()
}

module.exports = {
  user,
}
