import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import homeReducers from './homeReducers';

const appReducers = combineReducers({
  loginReducer,
  homeReducers,
});

export default appReducers;
