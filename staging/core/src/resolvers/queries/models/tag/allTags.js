const allTags = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const tags = await context.prisma.tags({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return tags
}

module.exports = allTags
