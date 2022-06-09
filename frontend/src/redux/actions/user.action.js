import { GET_USER, SET_USER } from "../types/user.types";

export const getUser = () => ({
  type: GET_USER
});

export const setUser = (user) => ({
  type: SET_USER,
  user
});