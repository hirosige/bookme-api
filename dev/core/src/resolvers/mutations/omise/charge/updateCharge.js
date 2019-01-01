const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const updateCharge = async (parent, args, ctx, info) => {
  authorize(ctx)

  let updatedCharge;

  try {
    updatedCharge = await client.charges.update(
      args.chargeId,
      {
        description: args.description,
        metadata: args.metadata,
      },
      (err, charge) => {
        if (err) throw new Error(err)

        return charge
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return updatedCharge
}

module.exports = updateCharge
