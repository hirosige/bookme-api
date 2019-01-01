const allAdvantageIcons = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const advantageIcons = await context.prisma.advantageIcons({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return advantageIcons
}

module.exports = allAdvantageIcons
