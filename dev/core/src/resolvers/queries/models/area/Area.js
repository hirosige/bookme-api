const Area = async (parent, args, context) => {
  const area = await context.prisma.area({
    id: args.id,
  })

  return area
}

module.exports = Area
