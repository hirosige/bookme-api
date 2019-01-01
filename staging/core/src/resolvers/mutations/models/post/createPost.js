const { authorize } = require('../../../../utils/authService')
const validateCreatePost = require('../../../validators/post/validateCreatePost')

const createPost = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreatePost(args.input, ctx)

  return ctx.prisma.createPost({
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

module.exports = createPost
