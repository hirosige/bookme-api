const { authorize } = require('../../../../utils/authService')
const validateUpdateContact = require('../../../validators/contact/validateUpdateContact')

const updateContact = async (parent, args, ctx, info) => {
  authorize(ctx)
  await validateUpdateContact(args.input, ctx)

  return await ctx.prisma.updateContact({
    data: {
      name: args.input.name,
      email: args.input.email,
      tel: args.input.tel,
      title: args.input.title,
      reference: args.input.reference,
      description: args.input.description,
      isReplied: args.input.isReplied,
      replyMessage: args.input.replyMessage,
    },
    where: {
      id: args.input.id
    }
  })
  .then(res => {
    return {
      ...res
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = updateContact
