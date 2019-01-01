const { authorize } = require('../../../../utils/authService')
const sendContactRecieved = require('../../../subscriptions/models/sendContactRecieved')
const validateCreateContact = require('../../../validators/contact/validateCreateContact')

const createContact = async (parent, args, context, info) => {
  authorize(context)
  await validateCreateContact(args.input, ctx)

  return context.prisma.createContact({
    name: args.input.name,
    email: args.input.email,
    tel: args.input.tel,
    title: args.input.title,
    reference: args.input.reference,
    description: args.input.description,
    isReplied: args.input.isReplied,
    replyMessage: args.input.replyMessage,
  })
  .then(res => {
    sendContactRecieved(res)
    return {
      ...res
    }
  })
  .catch(err => { throw new Error(err) })
}

module.exports = createContact
