// import { GET_FEED, GET_POST } from '../actions/types';
import * as types from '.././actions/types';

const initialState = {
  feed: [],
<<<<<<< HEAD
<<<<<<< HEAD
  postInfo: {}
  // dataLoaded: false,
=======
=======
>>>>>>> 5fe1f5dd8dbfc58a613a469332182b3e8d4eb2f0
  toggle: false,
};

export default function(state = initialState, action) {
  let feed = state.feed;
  let toggle = state.toggle;

  switch (action.type) {
    case types.GET_FEED: {
      feed = action.payload
      return {
        ...state,
        feed,
      };
    }
<<<<<<< HEAD
>>>>>>> e41f8e6b655e2af15dbe7547f6bcfd3819e01e21
=======
>>>>>>> 5fe1f5dd8dbfc58a613a469332182b3e8d4eb2f0
};

export default function(state = initialState, action) {
  console.log('state', state);
  let newState = Object.assign([], state);
  console.log('newState',newState);
  switch (action.type) {
    case types.GET_FEED:
      // console.log('getFeed', action.payload);
      // newState.feed = action.payload;
      // console.log(newState);
      return action.payload;

    case types.GET_POST: {
      return action.payload
    }

    case types.ADD_POST: {
      feed.push(action.payload)
      return {
        ...state,
        feed,
      };
    }

    case types.CHANGE_TOGGLE: {
      toggle = !toggle;
      return {
        ...state,
        toggle,
      };
    }
    
    case types.UPVOTE:
        // console.log('newstate', newState);
        // console.log(action.payload);
        // newState[action.payload.key].likes
        newState[action.payload.location].likes.push({temporary: 'object'});
        // console.log(newState[0]);
      return newState;

    case types.DOWNVOTE:
      newState[action.payload.location].likes.pop();
      return newState;

    default:
      return state;
  }
};
