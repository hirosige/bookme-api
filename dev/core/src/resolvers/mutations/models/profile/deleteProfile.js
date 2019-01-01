const { authorize } = require('../../../../utils/authService')
const validateDeleteProfile = require('../../../validators/profile/validateDeleteProfile')

const deleteProfile = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteProfile(args.input, ctx)

  return ctx.prisma.deleteProfile({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res,
      user: ctx.prisma.profile({ id: res.id }).user(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deleteProfile
