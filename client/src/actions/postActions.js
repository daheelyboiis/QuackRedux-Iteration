import axios from 'axios';
// import { GET_FEED, GET_POST } from './types';
import * as types from './types';

export const getFeed = () => dispatch => {
  axios
    .get('/api/posts')
    .then(res => dispatch({
      type: types.GET_FEED,
      payload: res.data
    }))
    .catch(err =>
      dispatch({
        type: types.GET_FEED,
        payload: err.response.data
      })
    );
};

export const getPost = () => dispatch => {
  axios
    .get('/api/posts/:id')
    .then(res => dispatch({
      type: types.GET_POST,
      payload: res.data
    }))
    .catch(err =>
      dispatch({
        type: types.GET_POST,
        payload: err.response.data
      })
    );
};

export const addPost = () => dispatch => {
  let config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': localStorage['jwtToken']
    }
  }
  axios
    .post('/api/posts')
    .then(res => dispatch({
      type: types.ADD_POST,
      payload: res.data
    }))
    .catch(err =>
      dispatch({
        type: types.ADD_POST,
        payload: err.response.data
      })
    );
};


export const changeToggle = (e) => ({
  type: types.CHANGE_TOGGLE,
  payload: e,
});
















