const allContacts = async (parent, args, context) => {
  const where = args.filter
    ? args.filter
    : {}

  const contacts = await context.prisma.contacts({
    where,
    orderBy: args.orderBy,
    skip: args.skip,
    first: args.first,
    last: args.last,
    before: args.before,
    after: args.after,
  })

  return contacts
}

module.exports = allContacts
