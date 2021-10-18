var mongoose = require("mongoose");

var StudentSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  nombre: { type: String, required: true },
  carrera: { type: String, required: true },
  celular: { type: Number, required: true },
  fechaIngreso: { type: Date, required: true },
  cedula: { type: Number, required: true },
  estado: { type: String, required: true },
  proyectos: { type: [Number], required: true },
  credencial_id: { type: Number, required: true },
});
const Student = mongoose.model("Estudiante", StudentSchema);
module.exports = Student;
