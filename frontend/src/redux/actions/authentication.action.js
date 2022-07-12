import { SET_AUTHENTICATION, UPDATE_PROFILEPICTURE_AND_USERNAME } from "../types/authentication.types";

export const setIsAuthenticated = (authenticationData) => ({
  type: SET_AUTHENTICATION,
  authenticationData,
});

export const UpdateProfileDetails = (data) => ({
  type: UPDATE_PROFILEPICTURE_AND_USERNAME,
  data,
});