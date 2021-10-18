var mongoose = require("mongoose");

var ProyectoSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  estado: { type: String, required: true },
  obGeneral: { type: String, required: true },
  obEspecificos: { type: String, required: true },
  presupuesto: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFinal: { type: Date, required: true },
  avances: { type: [String], required: true },
  //investigadores_id:{type:[Number],required:true},
});
const Proyecto = mongoose.model("Proyecto", ProyectoSchema);
module.exports = Proyecto;
