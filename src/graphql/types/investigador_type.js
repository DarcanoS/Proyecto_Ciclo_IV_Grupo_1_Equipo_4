var graphql = require("graphql");
const { model, models } = require("mongoose");
var { GraphQLObjectType, GraphQLString, GraphQLInputObjectType } = graphql;

var ProyectoType = require("./proyecto_type");
var Proyecto = require("../../models/proyecto_schema");

var inforOutProyectos = require("./subTypes/info_out");

var InvestigadorType = new GraphQLObjectType({
  name: "investigador",
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    nombre: {
      type: GraphQLString,
    },
    proyectos: {
      // type: ProyectoType,
      // resolve(parent, args){
      //     return Proyecto.findById(parent.proyectos[0].idProyecto);
      // }

      type: graphql.GraphQLList(inforOutProyectos),
    },
    credencial_id: {
      type: GraphQLString,
    },
  }),
});

module.exports = InvestigadorType;
