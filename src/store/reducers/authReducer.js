const initialState = {
  authError: null
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("LOGIN - error");
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("success");
      return {
          ...state,
          authError: null
      }
    case "SIGNOUT_SUCCESS":
        console.log("signed out")
        return state
    default:
      return state;
  }
};

export default authReducer;
