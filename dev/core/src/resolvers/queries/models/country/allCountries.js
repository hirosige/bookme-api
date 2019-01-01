const allCountries = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const countries = await context.prisma.countries({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return countries
}

module.exports = allCountries
