import * as types from '../constants/ActionTypes';

export const requestLogin = (username: string, password: string) => {
  return {
    type: types.REQUEST_LOGIN,
    data: {
      username,
      password,
    },
  };
}
export const loginSuccess = (data: any) => {
  return {
    type: types.LOGIN_SUCCESS,
    data,
  };
}

export const loginFail = (data: any) => {
  return {
    type: types.LOGIN_FAIL,
    data,
  };
}
