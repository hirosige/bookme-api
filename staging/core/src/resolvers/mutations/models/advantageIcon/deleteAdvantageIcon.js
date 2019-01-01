const { authorize } = require('../../../../utils/authService')
const validateDeleteAdvantageIcon = require('../../../validators/advantageIcon/validateDeleteAdvantageIcon')

const deleteAdvantageIcon = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteAdvantageIcon(args.input, ctx)

  return ctx.prisma.deleteAdvantageIcon({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res,
      advantage: ctx.prisma.advantageIcon({ id: res.id }).advantage(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deleteAdvantageIcon
