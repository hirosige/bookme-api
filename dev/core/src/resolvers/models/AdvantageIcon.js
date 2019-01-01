const advantage = (parent, args, ctx) => {
  return ctx.prisma.advantageIcon({ id: parent.id }).advantage()
}

module.exports = {
  advantage,
}
