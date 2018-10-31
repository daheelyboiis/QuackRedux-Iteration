// import { GET_FEED, GET_POST } from '../actions/types';
import * as types from '.././actions/types';

const initialState = {
  feed: [],
  postInfo: {},
  toggle: false
  // dataLoaded: false,
};

export default function(state = initialState, action) {
  let newState = Object.assign([], state);
  let feed = state.feed;
  let toggle = state.toggle;
  switch (action.type) {
    case types.GET_FEED:
    feed = action.payload
    return {
      ...state,
      feed
    };
     
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
        newState.feed[action.payload.location].likes.push({temporary: 'object'});
        // console.log(newState[0]);
      return newState;

    case types.DOWNVOTE:
      newState.feed[action.payload.location].likes.pop();
      return newState;

    default:
      return state;
  }
};
