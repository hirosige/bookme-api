const allProfiles = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const profiles = await context.prisma.profiles({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return profiles
}

module.exports = allProfiles
