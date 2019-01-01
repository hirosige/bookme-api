const { authorize } = require('../../../../utils/authService')
const validateCreateAdvantageIcon = require('../../../validators/advantageIcon/validateCreateAdvantageIcon')

const createAdvantageIcon = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateAdvantageIcon(args.input, ctx)

  return ctx.prisma.createAdvantageIcon({
    cdnUrl: args.input.cdnUrl,
    isImage: args.input.isImage,
    isStored: args.input.isStored,
    mimeType: args.input.mimeType,
    name: args.input.name,
    size: args.input.size,
    uuid: args.input.uuid,
    advantageId: args.input.advantageId,
    advantage: args.input.advantage,
  })
  .then(res => {
    return {
      ...res,
      advantage: ctx.prisma.advantageIcon({ id: res.id }).advantage(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = createAdvantageIcon
