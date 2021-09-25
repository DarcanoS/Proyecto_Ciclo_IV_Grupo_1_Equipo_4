var mongoose = require ("mongoose");

var StudentSchema = new mongoose.Schema({
        _id:{type:Number,required:true},
        nombre:{type:String,required:true},
        carrera:{type:String,required:true},
        celular:{type:Number,required:true},
        fechaIngreso: {type: Date,required:true},
        cedula: {type:Number, required:true},
        estado:{type:String,required:true},
        proyectos_id:{type:Number,required:true}, 
        credenciales_id:{type:Number ,required:true}
})
const Student = mongoose.model("Student", StudentSchema)
module.exports = Student

