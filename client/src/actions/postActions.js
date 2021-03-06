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

export const getPost = (id) => dispatch => {
  axios
    .get(`/api/posts/${id}`)
    .then(res => {dispatch({
      type: types.GET_POST,
      payload: res.data
    })})
    .catch(err => { console.log('err.response',err.response)
      dispatch({
        type: types.GET_POST,
        payload: err.response.data
      })
    });
};

export const addPost = (input) => dispatch => {
  let config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': localStorage['jwtToken']
    },
  }

  let text = {
    text: input
  }

  axios
    .post('/api/posts', text, config)
    .then(res => dispatch({
      type: types.ADD_POST,
      payload: res.data
    }))
    .catch(err => console.log(err))
};

export const changePostText = (text) => {
  return {
    type: types.CHANGE_POST_TEXT,
    payload: text
  }
};

export const deletePost = (id, location) => dispatch => {
  let config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': localStorage['jwtToken']
    },
  }

  axios
    .delete(`/api/posts/${id}`, config)
    .then(res => dispatch({
      type: types.DELETE_POST,
      payload: res.data
    }))
    .catch(err => alert("Cannot delete other user's post"))
}


export const upvote = (id, location) => {
  axios
    .post(`api/posts/like/${id}`)
    .catch(err => console.log(err))
  return {
      type: types.UPVOTE,
      payload: {id: id,
        location: location
      }
    }
}

export const downvote = (id, location) => {
  axios
    .post(`api/posts/unlike/${id}`)
    return {
      type: types.DOWNVOTE,
      payload: {id: id,
        location: location
      }
    }
}


export const addComment = (input, id) => dispatch => {
  console.log(input, "this is the input", id, " this is the ID")
  let config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': localStorage['jwtToken']
    },
  }

  let text = {
    text: input
  }

  axios
    .post(`/api/posts/comment/${id}`, text, config)
    .then(res => 
      dispatch({

      type: types.ADD_COMMENT,
      payload: res.data
    }))
    .catch(err => console.log(err))
};
















