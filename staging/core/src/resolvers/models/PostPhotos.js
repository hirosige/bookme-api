const post = (parent, args, ctx) => {
  return ctx.prisma.postPhotos({ id: parent.id }).post()
}

module.exports = {
  post,
}
