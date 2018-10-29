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

