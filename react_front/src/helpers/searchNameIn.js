function searchNameIn(data, idDelProyecto) {
  var nombres = [];
  console.log("ahora que :c", data);
  console.log(data.investigadores);
  data.investigadores.forEach((element) => {
    element.proyectos.forEach((element2) => {
      console.log(element2.Proyecto._id, ":", idDelProyecto);
      console.log(element2.Proyecto._id === idDelProyecto.toString());
      if (element2.Proyecto._id === idDelProyecto.toString()) {
        nombres.push(element.nombre);
      }
    });
  });
  return nombres;
}

export default searchNameIn;
