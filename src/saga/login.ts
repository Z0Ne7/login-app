import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { loginSuccess, loginFail } from '../actions/login';
import * as types from '../constants/ActionTypes';
import { API_URL } from '../constants/config';

export function* loginSaga(action: any) {
  try {
    const data = yield call(axios.request, {
      url: API_URL,
      method: 'GET',
      data: {
        username: action.data.username,
        password: action.data.password,
      }
    })
    if (data.data[0].username) {
      localStorage.setItem('token', data.data[0].token);
      yield put(loginSuccess(data.data[0].token));
    }
  } catch (error) {
    yield put(loginFail(error))
  }
}

export default function* signInSaga() {
  yield takeLatest(types.REQUEST_LOGIN, loginSaga);
}
