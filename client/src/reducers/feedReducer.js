// import { GET_FEED, GET_POST } from '../actions/types';
import * as types from '../actions/types';

const initialState = {
  feed: [],
  text: ''
  // dataLoaded: false,
};

export default function(state = initialState, action) {
  console.log('state', state);
  let newState = Object.assign([], state);
  console.log('newState',newState);
  let feed = state.feed;
  let text = state.text;

  switch (action.type) {
    case types.GET_FEED:
      // console.log('getFeed', action.payload);
      // newState.feed = action.payload;
      // console.log(newState);
      return action.payload;

    case types.GET_POST:
      return action.payload

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

    case types.ADD_POST: {
      console.log(action.payload, '-----payload-----')
      feed.shift(action.payload)
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

    default:
      return state;
  }
};
