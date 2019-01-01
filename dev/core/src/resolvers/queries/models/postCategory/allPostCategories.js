const allPostCategories = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const postCategories = await context.prisma.postCategories({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return postCategories
}

module.exports = allPostCategories
