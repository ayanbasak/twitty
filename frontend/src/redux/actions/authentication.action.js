import { SET_AUTHENTICATION } from "../types/authentication.types";

export const setIsAuthenticated = (authenticationData) => ({
  type: SET_AUTHENTICATION,
  authenticationData,
});
