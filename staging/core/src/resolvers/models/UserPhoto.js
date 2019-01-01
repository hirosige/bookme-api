const user = (parent, args, ctx) => {
  return ctx.prisma.userPhoto({ id: parent.id }).user()
}

module.exports = {
  user,
}
