const { authorize } = require('../../../../utils/authService')
const validateUpdatePost = require('../../../validators/post/validateUpdatePost')

const updatePost = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdatePost(args.input, ctx)

  return await ctx.prisma.updatePost({
    data: {
      mdContents: args.input.mdContents,
      title: args.input.title,
      authorId: args.input.authorId,
      author: args.input.author,
      categoryId: args.input.categoryId,
      category: args.input.category,
      heroId: args.input.heroId,
      hero: args.input.hero,
      photosId: args.input.photosId,
      photos: args.input.photos,
      tagsIds: args.input.tagsIds,
      tags: args.input.tags,
    },
    where: {
      id: args.input.id
    }
  })
  .then(res => {
    return {
      ...res,
      author: ctx.prisma.post({ id: res.id }).author(),
      category: ctx.prisma.post({ id: res.id }).category(),
      hero: ctx.prisma.post({ id: res.id }).hero(),
      photos: ctx.prisma.post({ id: res.id }).photos(),
      tags: ctx.prisma.post({ id: res.id }).tags(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = updatePost
