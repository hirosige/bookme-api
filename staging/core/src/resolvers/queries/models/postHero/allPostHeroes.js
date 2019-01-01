const allPostHeroes = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const postHeroes = await context.prisma.postHeroes({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return postHeroes
}

module.exports = allPostHeroes
