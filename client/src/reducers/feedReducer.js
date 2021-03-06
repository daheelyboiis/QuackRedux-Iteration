// import { GET_FEED, GET_POST } from '../actions/types';
import * as types from '../actions/types';

const initialState = {
  feed: [],
  selectedPost: null,
  text: '',
  // dataLoaded: false,
};

export default function(state = initialState, action) {
  console.log('state', state);
  let newState = Object.assign({}, state);
  console.log('newState',newState);
  let feed = state.feed.slice();
  let text = state.text;

  switch (action.type) {
    case types.GET_FEED:
      console.log('getfeedpayload', newState)
      newState.feed = action.payload;
      return newState;

    case types.GET_POST:
      console.log(action.payload, "action payload")
      newState.selectedPost = action.payload[0];
      return newState;

    case types.UPVOTE:
      if(!newState.feed[action.payload.location].liked) {
        newState.feed[action.payload.location].likes.push({temporary: 'object'});
        newState.feed[action.payload.location].liked = true;
      }

      return newState;

    case types.DOWNVOTE:
    if(newState.feed[action.payload.location].liked) newState.feed[action.payload.location].liked = false;
      newState.feed[action.payload.location].likes.pop();
      return newState;

    case types.ADD_POST: {
      console.log(action.payload, '-----payload-----')
      feed.unshift(action.payload)
      return {
        ...state,
        feed
      }
    }

    case types.DELETE_POST: {
      feed.splice(action.payload.location, 1);
      return {
        ...state,
        feed
      }
    }

    case types.CHANGE_POST_TEXT: {
      console.log(state, '----state---')
      text += action.payload;
      return{
        ...state,
        text
      }
    }

    case types.ADD_COMMENT: {

      
      newState.selectedPost = action.payload;

      return newState;
    }

    default:
      return state;
  }
};
