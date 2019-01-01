const allHotelPhotos = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const hotelPhotos = await context.prisma.hotelPhotos({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return hotelPhotos
}

module.exports = allHotelPhotos
