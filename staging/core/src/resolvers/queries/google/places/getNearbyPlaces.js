const axios = require('axios')
const { authorize } = require('../../../../utils/authService')

const getNearbyPlaces = async (parent, args, ctx, info) => {
  authorize(ctx)

  let fetchedPlaces;

  try {
    const {
      lat,
      lng,
      radius,
      type,
      keyword,
    } = args

    const BASE_URL = 'https://maps.googleapis.com/maps/api/'
    const MODULE = 'place/nearbysearch/json'
    const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

    const ENDPOINT =
      `${BASE_URL}${MODULE}?location=${lat},${lng}&radius=${radius}&type=${type}&key=${GOOGLE_API_KEY}`


    fetchedPlaces = await axios.get(ENDPOINT)
      .then(response => {
        return response.data.results
      }).catch(error => {
        return { error: error }
      })
  } catch(e) {
    throw new Error(e.message)
  }

  return fetchedPlaces
}

module.exports = getNearbyPlaces
