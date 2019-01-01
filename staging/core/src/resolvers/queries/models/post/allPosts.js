const allPosts = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const posts = await context.prisma.posts({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return posts
}

module.exports = allPosts
