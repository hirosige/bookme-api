const Favorite = async (parent, args, context) => {
  const favorite = await context.prisma.favorite({
    id: args.id,
  })

  return favorite
}

module.exports = Favorite
