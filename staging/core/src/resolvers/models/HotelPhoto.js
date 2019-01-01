const hotel = (parent, args, ctx) => {
  return ctx.prisma.hotelPhoto({ id: parent.id }).hotel()
}

module.exports = {
  hotel,
}
