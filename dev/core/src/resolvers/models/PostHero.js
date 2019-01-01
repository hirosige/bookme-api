const post = (parent, args, ctx) => {
  return ctx.prisma.postHero({ id: parent.id }).post()
}

module.exports = {
  post,
}
