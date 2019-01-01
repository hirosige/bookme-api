const _allBookingsMeta = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const count = await context.prisma.bookingsConnection({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })
  .aggregate()
  .count()

  return {
    count
  }
}

module.exports = _allBookingsMeta
