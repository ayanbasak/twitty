import { SET_AUTHENTICATION } from "../types/authentication.types";

const initialState = {
  isAuthenticated: false,
  accessToken: "",
  refreshToken: "",
};

export default (state = initialState, action) => {
  //   console.log("reducer >>>> " + JSON.stringify(action));
  switch (action.type) {
    case SET_AUTHENTICATION:
      const { isAuthenticated, accessToken, refreshToken } = action.authenticationData;
      return { ...state, isAuthenticated, accessToken, refreshToken };

    default:
      return state;
  }
};
