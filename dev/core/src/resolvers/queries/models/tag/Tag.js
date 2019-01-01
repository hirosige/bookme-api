const Tag = async (parent, args, context) => {
  const tag = await context.prisma.tag({
    id: args.id,
  })

  return tag
}

module.exports = Tag
