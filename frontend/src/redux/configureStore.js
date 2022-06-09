import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducer from "./reducers/user.reducer";
import AuthenticationReducer from "./reducers/authentication.reducer";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
//   counter: counterReducer,
  user: userReducer,
  isAuthenticated: AuthenticationReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
