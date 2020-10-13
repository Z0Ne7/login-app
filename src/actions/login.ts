import { ACTION } from '../constants/actionTypes';

export const requestLogin = (username: string, password: string) => {
  return {
    type: ACTION.REQUEST_LOGIN,
    data: {
      username,
      password,
    },
  };
};
export const loginSuccess = (data: any) => {
  return {
    type: ACTION.LOGIN_SUCCESS,
    data,
  };
};

export const loginFail = (data: any) => {
  return {
    type: ACTION.LOGIN_FAIL,
    data,
  };
};
