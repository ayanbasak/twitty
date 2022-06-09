import { takeLatest } from "redux-saga/effects";
import { GET_USER } from "../types/user.types";
import { handleGetUser } from "./handlers/user.handler";


export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
