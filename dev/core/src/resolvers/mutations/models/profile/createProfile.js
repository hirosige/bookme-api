const { authorize } = require('../../../../utils/authService')
const validateCreateProfile = require('../../../validators/profile/validateCreateProfile')

const createProfile = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateCreateProfile(args.input, ctx)

  return ctx.prisma.createProfile({
    address: args.input.address,
    firstName: args.input.firstName,
    lastName: args.input.lastName,
    passportNo: args.input.passportNo,
    subscriptionEmail: args.input.subscriptionEmail,
    tel: args.input.tel,
    user: { connect: { id: args.input.userId } },
  })
  .then(res => {
    return {
      ...res,
      user: ctx.prisma.profile({ id: res.id }).user(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = createProfile
