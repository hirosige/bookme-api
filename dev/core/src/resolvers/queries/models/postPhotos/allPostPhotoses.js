const allPostPhotoses = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const postPhotos = await context.prisma.postPhotos({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return postPhotos
}

module.exports = allPostPhotoses
