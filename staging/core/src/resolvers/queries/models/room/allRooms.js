const allRooms = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const rooms = await context.prisma.rooms({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return rooms
}

module.exports = allRooms
