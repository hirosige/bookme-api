const photos = (parent, args, ctx) => {
  return ctx.prisma.room({ id: parent.id }).photos()
}

const hotel = (parent, args, ctx) => {
  return ctx.prisma.room({ id: parent.id }).hotel()
}

module.exports = {
  photos,
  hotel,
}
