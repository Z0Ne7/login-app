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
    })
    if (action.data.username === data.data[0].username && action.data.password === data.data[0].password) {
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
