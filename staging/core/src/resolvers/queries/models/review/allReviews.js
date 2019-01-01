const allReviews = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const reviews = await context.prisma.reviews({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return reviews
}

module.exports = allReviews
