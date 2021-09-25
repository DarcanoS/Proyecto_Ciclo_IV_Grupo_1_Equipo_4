var expect = require("chai").expect
var Student = require("../src/dbschema");

//Pruebas de insert 
describe ("#StudentSchema test their validations",function(){
    it("Should be invalid if name if empty",function(done){
        var student1= new Student({
            _id:1,
            carrera:"Historia",
            celular:30059167889,
            fechaIngreso: new Date('2015-03-01T08:00:00Z'),
            cedula: 12023840,
            estado:"Activo",
            proyectos_id:1, 
            credenciales_id:1
        })
        student1.validate(function(err){
               expect(err.errors.nombre).to.exists; 
               done();
        })
    })
    it("Should be invalid if celular is a string",function(done){
        var student2= new Student({
            _id:2,
            nombre:"Andrea G",
            carrera:"Historia",
            celular:"3005916h7889",
            fechaIngreso: new Date('2015-03-01T08:00:00Z'),
            cedula: 12023840,
            estado:"Activo",
            proyectos_id:1, 
            credenciales_id:1
        })
        student2.validate(function(err){
               expect(err.errors.celular).to.exists; 
               done();
        })
    })
})

//Pruebas de read
//Antes de probar insertamos un estudiante en la colección estudiantes 
beforeEach(()=>{
    student3= new Student({
        _id:1,
        nombre: "Carlos Santana",
        carrera:"Historia",
        celular:30059167889,
        fechaIngreso: new Date('2015-03-01T08:00:00Z'),
        cedula: 12023840,
        estado:"Activo",
        proyectos_id:1, 
        credenciales_id:1
    });
    student3.save().then(()=>done());

});
describe ("#StudentSchema test saving a new record",function(){ 
    it("Finds student Carlos Santana",function(done){
        //Buscamos el estudiantes que se debío insertar por el nombre 
        Student.findOne({nombre:"Carlos Santana"})
        .then((student)=>{
            expect(student.name).to.equal("Carlos Santana"); //Si el nombre es igual a "Carlos Santana Pasa"
        }); done();
    })
})

describe ("#StudentSchema updating an Student",function(){
    it("Update student Carlos Santana carrera",function(done){
        student3.update({carrera:"Lenguas"})
        .then(()=>Student.findOne({carrera:"Lenguas"}))
        .then((student)=>{
            expect(student.name).to.equal("Carlos Santana");
        });done();
    })
})
describe("#StudentSchema deleting an Student",function(){
    it("Delete student Carlos Santana",function(done){
        student3.remove() //Borramos el estudiante creado 
            .then(()=>Student.findOne({name:"Carlos Santana"})) //Buscamos en la colección el estudiante por el nombre
            .then((student)=>{
                expect(student).to.equal(null); // Si retorna null la busqueda es porque se elimino correctamente el record
            });
            done();
    })
})
