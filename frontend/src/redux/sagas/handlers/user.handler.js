import { call, put } from "redux-saga/effects";
import { setUser } from "../../actions/user.action";
import userService from "../../../Services/user.service";

export function* handleGetUser(action) {
  try {
    const response = yield call(userService.fetchUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}

