const Profile = async (parent, args, context) => {
  const profile = await context.prisma.profile({
    id: args.id,
  })

  return profile
}

module.exports = Profile
