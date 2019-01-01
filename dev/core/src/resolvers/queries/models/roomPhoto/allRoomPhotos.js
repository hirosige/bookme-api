const allRoomPhotos = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const roomPhotos = await context.prisma.roomPhotos({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return roomPhotos
}

module.exports = allRoomPhotos
