// import { GET_FEED, GET_POST } from '../actions/types';
import * as types from '../actions/types';

const initialState = {
  feed: {},
  // dataLoaded: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_FEED:
      return action.payload;

    case types.GET_POST:
      return action.payload

    default:
      return state;
  }
};
