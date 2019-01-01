const country = (parent, args, ctx) => {
  return ctx.prisma.hotel({ id: parent.id }).country()
}

const area = (parent, args, ctx) => {
  return ctx.prisma.hotel({ id: parent.id }).area()
}

const photos = (parent, args, ctx) => {
  return ctx.prisma.hotel({ id: parent.id }).photos()
}

const rooms = (parent, args, ctx) => {
  return ctx.prisma.hotel({ id: parent.id }).rooms()
}

const favorites = (parent, args, ctx) => {
  return ctx.prisma.hotel({ id: parent.id }).favorites()
}

const advantages = (parent, args, ctx) => {
  return ctx.prisma.hotel({ id: parent.id }).advantages()
}

const bookings = (parent, args, ctx) => {
  return ctx.prisma.hotel({ id: parent.id }).bookings()
}

const reviews = (parent, args, ctx) => {
  return ctx.prisma.hotel({ id: parent.id }).reviews()
}

module.exports = {
  country,
  area,
  photos,
  rooms,
  favorites,
  advantages,
  bookings,
  reviews
}
