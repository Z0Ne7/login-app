import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { loginFail, loginSuccess } from '../actions/login';
import { ACTION } from '../constants/actionTypes';
import { API_URL } from '../constants/serviceTypes';

export function* loginSaga(action: any) {
  try {
    const data = yield call(axios.request, {
      url: API_URL,
      method: 'GET',
    });
    if (
      action.data.username === data.data[0].username &&
      action.data.password === data.data[0].password
    ) {
      localStorage.setItem('token', data.data[0].token);
      yield put(loginSuccess(data.data[0].token));
    }
  } catch (error) {
    yield put(loginFail(error));
  }
}

export default function* signInSaga() {
  yield takeLatest(ACTION.REQUEST_LOGIN, loginSaga);
}
