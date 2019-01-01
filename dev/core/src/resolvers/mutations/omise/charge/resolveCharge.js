const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const resolveCharge = async (parent, args, ctx, info) => {
  authorize(ctx)

  let resolvedCharge;

  try {
    resolvedCharge = await client.charges.capture(
      args.chargeId,
      (err, charge) => {
        if (err) throw new Error(err)

        return charge
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return resolvedCharge
}

module.exports = resolveCharge
