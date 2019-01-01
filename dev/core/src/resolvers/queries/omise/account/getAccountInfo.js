const { authorize } = require('../../../../utils/authService')
const client = require('omise')({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const getAccountInfo = async (parent, args, ctx, info) => {
  authorize(ctx)

  let accountInfo;

  try {
    accountInfo = await client.account.retrieve(
      (err, account) => {
        if (err) throw new Error(err)

        return account
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return accountInfo
}

module.exports = getAccountInfo
