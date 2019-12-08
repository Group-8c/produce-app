/*
    React-Redux reducer file for combining different reducers
*/
import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import itemReducer from './itemReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    item: itemReducer
  });
