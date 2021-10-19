var mongoose = require("mongoose");

var InvestigadorSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  nombre: { type: String, required: true },
  proyectos: { type: [JSON], required: true },
  credencial_id: { type: Number, required: true },
});
const Investigador = mongoose.model("Investigador", InvestigadorSchema);
module.exports = Investigador;
