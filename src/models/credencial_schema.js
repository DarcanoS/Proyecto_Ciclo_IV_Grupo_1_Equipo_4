var mongoose = require("mongoose");

var CredencialSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  usuario: { type: String, required: true },
  clave: { type: String, required: true },
});
const Credencial = mongoose.model("Credencial", CredencialSchema);
module.exports = Credencial;
