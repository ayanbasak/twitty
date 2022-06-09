import { GET_USER, SET_USER } from "../types/user.types";
  
const initialState = {
    user: undefined
};
  
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
        const { user } = action;
        return { ...state, user };
        default:
        return state;
    }
};