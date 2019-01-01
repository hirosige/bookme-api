const axios = require('axios')
const { authorize } = require('../../../../utils/authService')

const getDocumentsByDispute = async (parent, args, ctx, info) => {
  authorize(ctx)

  const DOCUMENT_URL =
    `https://api.omise.co/disputes/${args.disputeId}/documents`

  let fetchedDocuments;

  try {
    fetchedDocuments = await axios.get(DOCUMENT_URL, {
      params: {
        limit: args.limit,
        offset: args.offset,
        from: args.from,
        to: args.to,
        order: args.order,
      },
      auth: {
        username: process.env.OMISE_SECRET_KEY
      }
    })
      .then(response => {
        return response.data
      }).catch(err => {
        throw new Error(err)
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedDocuments.data
}

module.exports = getDocumentsByDispute
