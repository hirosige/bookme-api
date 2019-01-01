const PostHero = async (parent, args, context) => {
  const postHero = await context.prisma.postHero({
    id: args.id,
  })

  return postHero
}

module.exports = PostHero
