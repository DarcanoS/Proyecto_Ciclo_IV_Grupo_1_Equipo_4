import idAsignado from "../helpers/api/idAsignado";

export const login =
  (form, props, data, error, loading) => async (dispatch) => {
    if (form.usuario !== "" && form.clave !== "") {
      if (error) {
        dispatch({
          type: "ERROR_LOGIN",
          payload: "Error con el Servidor",
        });
      }
      if (loading) {
        dispatch({ type: "USER_LOADING" });
      }
      if (data) {
        let verificacion = false;
        dispatch({ type: "USER_LOADING" });
        data.credenciales.forEach((element) => {
          if (
            element.usuario === form.usuario &&
            element.clave === form.clave
          ) {
            verificacion = true;
          }
        });
        if (verificacion) {
          localStorage.setItem("token", "Logeado correctamente");
          dispatch({ type: "LOGIN", payload: "Usuario Ingresado" });

          console.log("Se ha hecho el loggin correctamente");
          props.history.push("/");
        } else {
          dispatch({
            type: "ERROR_LOGIN",
            payload: "Usuario o contraseña incorrectos",
          });
        }
      }
    } else {
      dispatch({
        type: "ERROR_LOGIN",
        payload: "Debe llenar todos los campos",
      });
    }
  };

export const signUp =
  (form, props, data, error, loading, addCredencial, setValues) =>
  async (dispatch) => {
    if (form.usuario !== "" && form.clave !== "") {
      if (loading) {
        dispatch({ type: "USER_LOADING" });
      }
      if (error) {
        dispatch({
          type: "ERROR_SIGNUP",
          payload: "Error con el Servidor",
        });
      }
      if (data) {
        dispatch({ type: "USER_LOADING" });

        localStorage.setItem("token", "Logeado correctamente");
        dispatch({ type: "LOGIN", payload: "Usuario Ingresado" });

        try {
          localStorage.setItem("_id", idAsignado(data.credenciales));
          addCredencial();
        } catch {
          dispatch({
            type: "ERROR_SIGNUP",
            payload: "Error con el Servidor",
          });
        }
      }
    } else {
      dispatch({
        type: "ERROR_SIGNUP",
        payload: "Debe llenar todos los campos",
      });
    }
  };

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
