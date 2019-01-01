const { authorize } = require('../../../../utils/authService')
const validateDeleteUserPhoto = require('../../../validators/userPhoto/validateDeleteUserPhoto')

const deleteUserPhoto = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteUserPhoto(args.input, ctx)

  return ctx.prisma.deleteUserPhoto({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deleteUserPhoto
