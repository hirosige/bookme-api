async function allUsers(parent, args, context) {
  const where = args.filter
    ? args.filter
    : {}

  const users = await context.prisma.users({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return users
}

module.exports = allUsers
