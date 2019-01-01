const Query = require('./queries')
const Mutation = require('./mutations')
const Models = require('./models')
const Scalars = require('./scalars')

module.exports = {
  Query,
  Mutation,
  ...Models,
  ...Scalars,
}
