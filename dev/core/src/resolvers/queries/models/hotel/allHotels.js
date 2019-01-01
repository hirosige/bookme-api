const allHotels = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const hotels = await context.prisma.hotels({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return hotels
}

module.exports = allHotels
