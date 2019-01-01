const Post = async (parent, args, context) => {
  const post = await context.prisma.post({
    id: args.id,
  })

  return post
}

module.exports = Post
