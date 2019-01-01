async function allUserPhotos(parent, args, context) {
  const where = args.filter
    ? args.filter
    : {}

  const userPhotos = await context.prisma.userPhotos({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return userPhotos
}

module.exports = allUserPhotos
