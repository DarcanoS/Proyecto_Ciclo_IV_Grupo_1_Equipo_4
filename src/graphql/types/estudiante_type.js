var graphql = require("graphql");
const { model, models } = require("mongoose");
var { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

var ProyectoType = require("./proyecto_type");
var Proyecto = require("../../models/proyecto_schema");

var EstudianteType = new GraphQLObjectType({
  name: "estudiante",
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    nombre: {
      type: GraphQLString,
    },
    carrera: {
      type: GraphQLString,
    },
    celular: {
      type: GraphQLString,
    },
    fechaIngreso: {
      type: GraphQLString,
    },
    cedula: {
      type: GraphQLString,
    },
    estado: {
      type: GraphQLString,
    },
    proyectos: {
      type: GraphQLList(ProyectoType),
      resolve(parent, args) {
        var proyectosList = [];
        var idsProyectos = parent.proyectos;
        idsProyectos.forEach(function (id) {
          proyectosList.push(Proyecto.findById(id));
        });
        return proyectosList;
      },
    },
    credencial_id: {
      type: GraphQLString,
    },
  }),
});

module.exports = EstudianteType;
