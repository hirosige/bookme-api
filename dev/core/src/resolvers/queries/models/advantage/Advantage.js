const Advantage = async (parent, args, context) => {
  const advantage = await context.prisma.advantage({
    id: args.id,
    name: args.name
  })

  return advantage
}

module.exports = Advantage
