function searchNameEst(data, idDelProyecto) {
  var nombres = [];
  console.log("ahora que estu :c", data);
  console.log(data.estudiantes);
  data.estudiantes.forEach((element) => {
    element.proyectos.forEach((element2) => {
      console.log(element2._id, "est:", idDelProyecto);
      console.log(element2._id === idDelProyecto.toString());
      if (element2._id === idDelProyecto.toString()) {
        nombres.push(element.nombre);
      }
    });
  });
  return nombres;
}

export default searchNameEst;
