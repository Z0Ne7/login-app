import { ACTION } from '../constants/actionTypes';
import produce from 'immer';

const initialState = {
  isAuthenticated: false,
};

const homeReducers = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION.LOGOUT:
        localStorage.removeItem('token');
        draft.isAuthenticated = false;
        break;
      case ACTION.LOGIN_SUCCESS:
        draft.isAuthenticated = true;
        break;
      default:
        return state;
    }
  });

export default homeReducers;
