var graphql = require("graphql");
const { model, models } = require("mongoose");
var { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

var ProyectoType = new GraphQLObjectType({
  name: "proyecto",
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    nombre: {
      type: GraphQLString,
    },
    descripcion: {
      type: GraphQLString,
    },
    estado: {
      type: GraphQLString,
    },
    obGeneral: {
      type: GraphQLString,
    },
    obEspecificos: {
      type: GraphQLString,
    },
    presupuesto: {
      type: GraphQLString,
    },
    fechaInicio: {
      type: GraphQLString,
    },
    fechaFinal: {
      type: GraphQLString,
    },
    avances: {
      type: GraphQLList(GraphQLString),
    },
  }),
});

module.exports = ProyectoType;
