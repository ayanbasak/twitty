import { SET_IS_AUTHENTICATED } from "../types/authentication.types";

export const setIsAuthenticated = (isAuthenticated) => ({
    type: SET_IS_AUTHENTICATED,
    isAuthenticated
  });