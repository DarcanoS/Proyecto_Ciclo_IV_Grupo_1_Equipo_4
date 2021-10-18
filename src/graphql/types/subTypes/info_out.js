var graphql = require("graphql");
const { model, models } = require("mongoose");
var { GraphQLObjectType, GraphQLString, GraphQLInputObjectType } = graphql;

var Proyecto = require("../../../models/proyecto_schema");
var ProyectoType = require("../proyecto_type");

var inforOutProyectos = new GraphQLObjectType({
  name: "InfoDeProyectosSalida",
  description: "informacion de los proyectos para la salida, con su respectiva intensidad",
  fields: () => ({
    Proyecto: {
      type: ProyectoType,
      resolve(parent, args) {
        return Proyecto.findById(parent.idProyecto);
      },
    },
    intensidad: {
      type: GraphQLString,
      resolve(parent, args) {
        return parent.intensidad;
      },
    },
  }),
});

module.exports = inforOutProyectos;
