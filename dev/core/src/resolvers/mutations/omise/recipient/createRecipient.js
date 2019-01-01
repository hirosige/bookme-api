const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const createRecipient = async (parent, args, ctx, info) => {
  authorize(ctx)

  let createdRecipient;

  try {
    createdRecipient = await client.recipients.create({
      name: args.name,
      email: args.email,
      type: args.type,
      description: args.description,
      tax_id: args.taxId,
      bank_account: {
        brand: args.bankBrand,
        number: args.bankNumber,
        name: args.bankName,
      }
    },
    (err, recipient) => {
      if (err) throw new Error(err)

      return recipient
    })
  } catch(e) {
    throw new Error(e.message)
  }

  return createdRecipient
}

module.exports = createRecipient
