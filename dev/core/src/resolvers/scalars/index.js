const GraphQLJSON = require('graphql-type-json')
const myCustomScalarType = require('./myCustomScalar')
const {
  GraphQLDate,
  GraphQLDateTime
} = require('graphql-iso-date')

module.exports = {
  Json: GraphQLJSON,
  Date: GraphQLDate,
  DateTime: GraphQLDateTime,
  MyCustomScalar: myCustomScalarType
}
