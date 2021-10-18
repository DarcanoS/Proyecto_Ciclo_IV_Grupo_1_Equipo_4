var graphql = require("graphql");
var { GraphQLObjectType, GraphQLID, GraphQLList } = graphql;

var Credencial = require("../models/credencial_schema");
var CredencialType = require("./types/credencial_type");

var Estudiante = require("../models/estudiante_schema");
var EstudianteType = require("./types/estudiante_type");

var Proyecto = require("../models/proyecto_schema");
var ProyectoType = require("./types/proyecto_type");

var Investigador = require("../models/investigador_schema");
var InvestigadorType = require("./types/investigador_type");

var RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    credenciales: {
      type: new GraphQLList(CredencialType),
      resolve(parent, args, contex, info) {
        return Credencial.find({});
      },
    },
    credencial: {
      type: CredencialType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args, contex, info) {
        return Credencial.findById(args.id);
      },
    },
    estudiantes: {
      type: new GraphQLList(EstudianteType),
      resolve(parent, args, contex, info) {
        return Estudiante.find({});
      },
    },
    estudiante: {
      type: EstudianteType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args, contex, info) {
        return Estudiante.findById(args.id);
      },
    },
    proyectos: {
      type: new GraphQLList(ProyectoType),
      resolve(parent, args, contex, info) {
        return Proyecto.find({});
      },
    },
    proyecto: {
      type: ProyectoType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args, contex, info) {
        return Proyecto.findById(args.id);
      },
    },
    investigadores: {
      type: new GraphQLList(InvestigadorType),
      resolve(parent, args, contex, info) {
        return Investigador.find({});
      },
    },
    investigador: {
      type: InvestigadorType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args, contex, info) {
        return Investigador.findById(args.id);
      },
    },
  },
});

module.exports = RootQuery;
