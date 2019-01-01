const allAreas = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const areas = await context.prisma.areas({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return areas
}

module.exports = allAreas
