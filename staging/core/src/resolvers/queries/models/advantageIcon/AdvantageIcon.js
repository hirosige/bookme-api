const AdvantageIcon = async (parent, args, context) => {
  const advantageIcon = await context.prisma.advantageIcon({
    id: args.id,
  })

  return advantageIcon
}

module.exports = AdvantageIcon
