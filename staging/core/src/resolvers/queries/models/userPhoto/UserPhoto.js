const UserPhoto = async (parent, args, context) => {
  const userPhoto = await context.prisma.userPhoto({
    id: args.id,
  })

  return userPhoto
}

module.exports = UserPhoto
