const allFavorites = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const favorites = await context.prisma.favorites({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return favorites
}

module.exports = allFavorites
