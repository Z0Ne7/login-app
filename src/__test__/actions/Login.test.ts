import { loginSuccess, requestLogin, loginFail } from '../../actions';
import { ACTION } from '../../constants/actionTypes';

describe('actions', () => {
  it('should create an action to request to login', () => {
    const data = {
      username: 'canhnt',
      password: '1111',
    }
    const expectedAction = {
      type: ACTION.REQUEST_LOGIN,
      data
    }
    expect(requestLogin(data.username, data.password)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to log in', () => {
    const data = '3KetKDH3jGCN0r9B55er'
    const expectedAction = {
      type: ACTION.LOGIN_SUCCESS,
      data
    }
    expect(loginSuccess(data)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action login failure', () => {
    const data = 'testData'
    const expectedAction = {
      type: ACTION.LOGIN_FAIL,
      data
    }
    expect(loginFail(data)).toEqual(expectedAction)
  })
})
