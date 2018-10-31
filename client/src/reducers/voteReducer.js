import * as types from '../actions/types';

const initialState = {
  post: {},
  // dataLoaded: false,
};

export default function(state = initialState, action) {
  let newState = Object.assign({}, state)
  switch (action.type) {
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