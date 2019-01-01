const { authorize } = require('../../../../utils/authService')
const validateUpdateProfile = require('../../../validators/profile/validateUpdateProfile')

const updateProfile = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdateProfile(args.input, ctx)

  return await ctx.prisma.updateProfile({
    data: {
      address: args.input.address,
      firstName: args.input.firstName,
      lastName: args.input.lastName,
      passportNo: args.input.passportNo,
      subscriptionEmail: args.input.subscriptionEmail,
      tel: args.input.tel,
    },
    where: {
      id: args.input.id
    }
  })
  .then(res => {
    return {
      ...res,
      user: ctx.prisma.profile({ id: res.id }).user(),
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = updateProfile
