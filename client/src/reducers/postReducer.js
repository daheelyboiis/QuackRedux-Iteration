import * as types from '../actions/types';

const initialState = {
  post: {},
  // dataLoaded: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_POST:
      return action.payload

    default:
      return state;
  }
};