const author = (parent, args, ctx) => {
  return ctx.prisma.post({ id: parent.id }).author()
}

const category = (parent, args, ctx) => {
  return ctx.prisma.post({ id: parent.id }).category()
}

const tags = (parent, args, ctx) => {
  return ctx.prisma.post({ id: parent.id }).tags()
}

const hero = (parent, args, ctx) => {
  return ctx.prisma.post({ id: parent.id }).hero()
}

const photos = (parent, args, ctx) => {
  return ctx.prisma.post({ id: parent.id }).photos()
}

module.exports = {
  author,
  category,
  tags,
  hero,
  photos,
}
