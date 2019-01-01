const PostCategory = async (parent, args, context) => {
  const postCategory = await context.prisma.postCategory({
    id: args.id,
  })

  return postCategory
}

module.exports = PostCategory
