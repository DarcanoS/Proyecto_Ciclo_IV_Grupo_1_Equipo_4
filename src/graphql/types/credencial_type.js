var graphql = require("graphql");
const { model, models } = require("mongoose");
var { GraphQLObjectType, GraphQLString } = graphql;

var CredencialType = new GraphQLObjectType({
  name: "credencial",
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    usuario: {
      type: GraphQLString,
    },
    clave: {
      type: GraphQLString,
    },
  }),
});

module.exports = CredencialType;
