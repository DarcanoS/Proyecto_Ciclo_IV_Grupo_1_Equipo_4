const INITIAL_STATE = {
  login: false,
  token: "" || localStorage.token,
  user: {},
  loading: false,
  error_login: "",
  error_signup: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        login: true,
        token: localStorage.token,
        user: action.payload.user,
        loading: false,
        error_login: "",
        error_signup: "",
      };
    case "ERROR_LOGIN":
      return { ...state, error_login: action.payload, loading: false };
    case "ERROR_SIGNUP":
      return { ...state, error_signup: action.payload, loading: false };
    case "USER_LOADING":
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};
