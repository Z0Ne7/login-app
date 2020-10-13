import { ACTION } from '../constants/actionTypes';
import produce from 'immer';

const initialState = {
  loading: false,
  username: null,
  password: null,
  token: '',
};

const loginReducer = (state = initialState, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case ACTION.REQUEST_LOGIN:
        draft.loading = true;
        draft.username = action.data.username;
        draft.password = action.data.password;
        break;
      case ACTION.LOGIN_SUCCESS:
        draft.loading = false;
        draft.token = action.data;
        break;
      case ACTION.LOGIN_FAIL:
        draft.loading = false;
        break;
      default:
        return state;
    }
  });

export default loginReducer;
