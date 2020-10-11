import { all } from 'redux-saga/effects';
import loginSaga from '../saga/login';

export default function* rootSaga() {
  yield all([
    loginSaga()
  ]);
}
