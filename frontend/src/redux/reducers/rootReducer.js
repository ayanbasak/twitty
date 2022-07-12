import authenticationReducer from "./authentication.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    authorization: authenticationReducer
});

export default rootReducer;