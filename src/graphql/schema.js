var graphql = require("graphql");
var { GraphQLSchema } = graphql;

var RootQuery = require("./queries");
var Mutation = require("./mutations");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
