var graphql = require("graphql");
const { model, models } = require("mongoose");
var { GraphQLObjectType, GraphQLString, GraphQLInputObjectType } = graphql;

var infoProyectos = new GraphQLInputObjectType({
  name: "InfoDeProyectos",
  description: "Id de los proyectos con sus intensidades horarios",
  fields: () => ({
    idProyecto: {
      type: GraphQLString,
    },
    intensidad: {
      type: GraphQLString,
    },
  }),
});

module.exports = infoProyectos;
