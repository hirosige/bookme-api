const PostPhotos = async (parent, args, context) => {
  const postPhoto = await context.prisma.postPhoto({
    id: args.id,
  })

  return postPhoto
}

module.exports = PostPhotos
