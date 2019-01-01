const algoliasearch = require('algoliasearch')

const algolia = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY,
)

const index = algolia.initIndex('users')

const userAlgoliaSync = user => {
  const {
    id,
    email,
    auth0UserId
  } = user

  index.addObjects([{
    id,
    email,
    auth0UserId
  }], (err, content) => {
    if (err) throw new Error(err)
  })
}

module.exports = userAlgoliaSync
