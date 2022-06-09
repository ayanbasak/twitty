import { SET_IS_AUTHENTICATED } from "../types/authentication.types";
  
const initialState = {
    isAuthenticated: false
};
  
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTHENTICATED:
            const { isAuthenticated } = action;
            return { ...state, isAuthenticated };
        default:
            return state;
    }
};