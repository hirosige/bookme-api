const { authorize } = require('../../../../utils/authService')
const validateDeleteContact = require('../../../validators/contact/validateDeleteContact')

const deleteContact = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateDeleteContact(args.input, ctx)

  return ctx.prisma.deleteContact({
    id: args.input.id,
  })
  .then(res => {
    return {
      ...res
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = deleteContact
