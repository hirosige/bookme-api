require('dotenv').config()

const { GraphQLServerLambda } = require('graphql-yoga')
const { makeExecutableSchema } = require('graphql-tools')
const { prisma } = require('./generated/prisma-client')
const resolvers = require('./core/src/resolvers')
const typeDefs = require('./core/src/types')

const lambda = new GraphQLServerLambda({
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
    resolverValidationOptions :{
      requireResolversForResolveType: false
    },
  }),
  context: req => {
    return {
      ...req,
      prisma,
    }
  },
})

exports.server = lambda.graphqlHandler
exports.playground = lambda.playgroundHandler
