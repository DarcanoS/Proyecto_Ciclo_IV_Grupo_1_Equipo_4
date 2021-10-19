
function idAsignado(arreglo) {
  var idsArreglo = [];
  arreglo.forEach((element) => {
    idsArreglo.push(parseInt(element._id));
  });

  
  for (let index = 1; index < (idsArreglo.length + 2); index++) {
    console.log("ALGO MAL:", idsArreglo,index)
    if (!idsArreglo.includes(index)) {
      console.log(!idsArreglo.includes(index),"No lo incluye")
      return index;
    }
  }
}

export default idAsignado;
