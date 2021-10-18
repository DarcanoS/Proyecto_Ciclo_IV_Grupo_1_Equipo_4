var graphql = require("graphql");
var { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList } = graphql;

var Credencial = require("../models/credencial_schema");
var CredencialType = require("./types/credencial_type");

var Estudiante = require("../models/estudiante_schema");
var EstudianteType = require("./types/estudiante_type");

var Investigador = require("../models/investigador_schema");
var InvestigadorType = require("./types/investigador_type");
var infoProyectos = require("./types/subTypes/infor_proye_type");

var Proyecto = require("../models/proyecto_schema");
var ProyectoType = require("./types/proyecto_type");

var Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addProyecto: {
      type: ProyectoType,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLString),
        },
        nombre: {
          type: new GraphQLNonNull(GraphQLString),
        },
        descripcion: {
          type: new GraphQLNonNull(GraphQLString),
        },
        estado: {
          type: new GraphQLNonNull(GraphQLString),
        },
        obGeneral: {
          type: new GraphQLNonNull(GraphQLString),
        },
        obEspecificos: {
          type: new GraphQLNonNull(GraphQLString),
        },
        presupuesto: {
          type: new GraphQLNonNull(GraphQLString),
        },
        fechaInicio: {
          type: new GraphQLNonNull(GraphQLString),
        },
        fechaFinal: {
          type: new GraphQLNonNull(GraphQLString),
        },
        avances: {
          type: new GraphQLNonNull(GraphQLList(GraphQLString)),
        },
      },
      resolve(parent, args) {
        let proyecto = new Proyecto({
          _id: args._id,
          nombre: args.nombre,
          descripcion: args.descripcion,
          estado: args.estado,
          obGeneral: args.obGeneral,
          obEspecificos: args.obEspecificos,
          presupuesto: args.presupuesto,
          fechaInicio: args.fechaInicio,
          fechaFinal: args.fechaFinal,
          avances: args.avances,
        });
        return proyecto.save();
      },
    },
    removeProyecto: {
      type: ProyectoType,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        let proyecto = Proyecto.findById(args._id);
        return proyecto.remove();
      },
    },
    updateProyecto: {
      type: ProyectoType,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLString),
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
      },
      resolve(parent, args) {
        return Proyecto.findByIdAndUpdate(
          args._id,
          {
            nombre: args.nombre,
            descripcion: args.descripcion,
            estado: args.estado,
            obGeneral: args.obGeneral,
            obEspecificos: args.obEspecificos,
            presupuesto: args.presupuesto,
            fechaInicio: args.fechaInicio,
            fechaFinal: args.fechaFinal,
            $push: {avances: args.avances}
          },
          {
            new: true,
          }
        );
      },
    },
    addEstudiante: {
      type: EstudianteType,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLString),
        },
        nombre: {
          type: new GraphQLNonNull(GraphQLString),
        },
        carrera: {
          type: new GraphQLNonNull(GraphQLString),
        },
        celular: {
          type: new GraphQLNonNull(GraphQLString),
        },
        fechaIngreso: {
          type: new GraphQLNonNull(GraphQLString),
        },
        cedula: {
          type: new GraphQLNonNull(GraphQLString),
        },
        estado: {
          type: new GraphQLNonNull(GraphQLString),
        },
        proyectos: {
          type: new GraphQLNonNull(GraphQLList(GraphQLString)),
        },
        credencial_id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        let estudiante = new Estudiante({
          _id: args._id,
          nombre: args.nombre,
          carrera: args.carrera,
          celular: args.celular,
          fechaIngreso: args.fechaIngreso,
          cedula: args.cedula,
          estado: args.estado,
          proyectos: args.proyectos,
          credencial_id: args.credencial_id,
        });
        return estudiante.save();
      },
    },
    removeEstudiante: {
      type: EstudianteType,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        let estudiante = Estudiante.findById(args._id);
        return estudiante.remove();
      },
    },
    updateEstudiante: {
      type: EstudianteType,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLString),
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
          type: GraphQLList(GraphQLString),
        },
        credencial_id: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return Estudiante.findByIdAndUpdate(
          args._id,
          {
            nombre: args.nombre,
            carrera: args.carrera,
            celular: args.celular,
            fechaIngreso: args.fechaIngreso,
            cedula: args.cedula,
            estado: args.estado,
            proyectos: args.proyectos,
            credencial_id: args.credencial_id,
          },
          {
            new: true,
          }
        );
      },
    },
    addCredencial: {
      type: CredencialType,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLString),
        },
        usuario: {
          type: new GraphQLNonNull(GraphQLString),
        },
        clave: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        let credencial = new Credencial({
          _id: args._id,
          usuario: args.usuario,
          clave: args.clave,
        });
        return credencial.save();
      },
    },
    removeCredencial: {
      type: CredencialType,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        let credencial = Credencial.findById(args._id);
        return credencial.remove();
      },
    },
    updateCredencial: {
      type: CredencialType,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLString),
        },
        usuario: {
          type: GraphQLString,
        },
        clave: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        Credencial.findByIdAndUpdate(args._id, {
          usuario: args.usuario,
          clave: args.clave,
        });

        return Credencial.findByIdAndUpdate(
          args._id,
          {
            usuario: args.usuario,
            clave: args.clave,
          },
          {
            new: true,
          }
        );
      },
    },
    addInvestigador: {
      type: InvestigadorType,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLString),
        },
        nombre: {
          type: new GraphQLNonNull(GraphQLString),
        },
        proyectos: {
          type: new GraphQLNonNull(GraphQLList(infoProyectos)),
        },
        credencial_id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        let investigador = new Investigador({
          _id: args._id,
          nombre: args.nombre,
          proyectos: args.proyectos,
          credencial_id: args.credencial_id,
        });
        return investigador.save();
      },
    },
    removeInvestigador: {
      type: InvestigadorType,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        let investigador = Investigador.findById(args._id);
        return investigador.remove();
      },
    },
    updateInvestigador: {
      type: InvestigadorType,
      args: {
        _id: {
          type: new GraphQLNonNull(GraphQLString),
        },
        nombre: {
          type: GraphQLString,
        },
        proyectos: {
          type: GraphQLList(infoProyectos),
        },
        credencial_id: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return Investigador.findByIdAndUpdate(
          args._id,
          {
            nombre: args.nombre,
            proyectos: args.proyectos,
            credencial_id: args.credencial_id,
          },
          {
            new: true,
          }
        );
      },
    },
  },
});

module.exports = Mutation;
