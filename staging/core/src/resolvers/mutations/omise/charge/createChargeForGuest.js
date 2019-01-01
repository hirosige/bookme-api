const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const createChargeForGuest = async (parent, args, ctx, info) => {
  authorize(ctx)

  let createdCharge;

  try {
    createdCharge = await client.charges.create({
      amount: args.amount,
      currency: args.currency,
      card: args.cardToken,
      description: args.description,
      metadata: args.metadata,
      capture: args.capture,
    },
    (err, charge) => {
      if (err) throw new Error(err)

      return charge
    })
  } catch(e) {
    throw new Error(e.message)
  }

  return createdCharge
}

module.exports = createChargeForGuest
