const INITIAL_STATE2 = {
  login: true,
  token: "" || localStorage.token,
  id_Proyecto: "",
  loading: false,
  error_add: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE2, action) => {
  switch (action.type) {
    case "ADD":
      return {
        login: true,
        token: localStorage.token,
        id_Proyecto: action.payload.user,
        loading: false,
        error_login: "",
      };
    case "ERROR_ADD":
      return { ...state, error_add: action.payload, loading: false };
    case "USER_LOADING":
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};
