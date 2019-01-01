const posts = (parent, args, ctx) => {
  return ctx.prisma.postCategory({ id: parent.id }).posts()
}

const children = (parent, args, ctx) => {
  return ctx.prisma.postCategory({ id: parent.id }).children()
}

module.exports = {
  posts,
  children,
}
