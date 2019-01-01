const allAdvantages = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const advantages = await context.prisma.advantages({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return advantages
}

module.exports = allAdvantages
