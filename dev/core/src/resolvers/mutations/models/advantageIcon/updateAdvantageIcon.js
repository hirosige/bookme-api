const { authorize } = require('../../../../utils/authService')
const validateUpdateAdvantageIcon = require('../../../validators/advantageIcon/validateUpdateAdvantageIcon')

const updateAdvantageIcon = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdateAdvantageIcon(args.input, ctx)

  return await ctx.prisma.updateAdvantageIcon({
    data: {
      cdnUrl: args.input.cdnUrl,
      isImage: args.input.isImage,
      isStored: args.input.isStored,
      mimeType: args.input.mimeType,
      name: args.input.name,
      size: args.input.size,
      uuid: args.input.uuid,
      advantageId: args.input.advantageId,
      advantage: args.input.advantage,
    },
    where: {
      id: args.input.id
    }
  })
  .then(res => {
    return {
      ...res,
      advantage: ctx.prisma.advantageIcon({ id: res.id }).advantage(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = updateAdvantageIcon
