const User = async (parent, args, context) => {
  const user = await context.prisma.user({
    id: args.id,
  })

  return user
}

module.exports = User
