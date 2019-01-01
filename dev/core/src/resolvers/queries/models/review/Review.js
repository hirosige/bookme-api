const Review = async (parent, args, context) => {
  const review = await context.prisma.review({
    id: args.id,
  })

  return review
}

module.exports = Review
