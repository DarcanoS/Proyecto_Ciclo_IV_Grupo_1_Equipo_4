import idAsignado from "../helpers/api/idAsignado";

export const addProyectoDB =
  (form, props, data, error, loading, addProyecto, setValues) =>
  async (dispatch) => {

    var verificacion = (form.nombre !== "" &&
      form.descripcion !== "" &&
      form.estado !== "" &&
      form.obGeneral !== "" &&
      form.obEspecificos !== "" &&
      form.presupuesto !== "" &&
      form.fechaInicio !== "" &&
      form.fechaFinal !== "" &&
      form.avances !== "");
    console.log(form)
    
    if (verificacion) {
      if (loading) {
        dispatch({ type: "USER_LOADING" });
      }
      if (error) {
        dispatch({
          type: "ERROR_ADD",
          payload: "Error con el Servidor",
        });
      }
      if (data) {
        dispatch({ type: "USER_LOADING" });

        localStorage.setItem("token", "Logeado correctamente");
        dispatch({ type: "ADD", payload: "Usuario Ingresado" });

        try {
          localStorage.setItem("_id", idAsignado(data.proyectos));
          addProyecto();
        } catch {
          dispatch({
            type: "ERROR_ADD",
            payload: "Error con el Servidor",
          });
        }
      }
    } else {
        console.log("FLAAN COMAPOS")
      dispatch({
        type: "ERROR_ADD",
        payload: "Debe llenar todos los campos",
      });
    }
  };

export const actualizarProyecto =
  (form, props, data_2, error_2, loading, updateProyecto, setValues) =>
  async (dispatch) => {
    if (form.usuario !== "" && form.clave !== "") {
      if (loading) {
        dispatch({ type: "USER_LOADING" });
      }
      if (error_2) {
        dispatch({
          type: "ERROR_ADD",
          payload: "Error con el Servidor",
        });
      }
      if (data_2) {
        dispatch({ type: "USER_LOADING" });

        localStorage.setItem("token", "Logeado correctamente");
        dispatch({ type: "LOGIN", payload: "Usuario Ingresado" });

        try {
          localStorage.setItem("_id", idAsignado(data_2.credenciales));
          updateProyecto();
        } catch {
          dispatch({
            type: "ERROR_ADD",
            payload: "Error con el Servidor",
          });
        }
      }
    } else {
      dispatch({
        type: "ERROR_ADD",
        payload: "Debe llenar todos los campos",
      });
    }
  };
