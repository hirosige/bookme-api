const posts = (parent, args, ctx) => {
  return ctx.prisma.tag({ id: parent.id }).posts()
}

module.exports = {
  posts,
}
