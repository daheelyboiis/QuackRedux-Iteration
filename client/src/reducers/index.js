import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import feedReducer from './feedReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  feed: feedReducer,
  post: postReducer,
  comment: commentReducer,
});