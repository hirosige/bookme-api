const Country = async (parent, args, context) => {
  const country = await context.prisma.country({
    id: args.id,
  })

  return country
}

module.exports = Country
