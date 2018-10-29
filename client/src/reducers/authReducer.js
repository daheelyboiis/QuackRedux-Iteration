import isEmpty from '../validation/is-empty';

import { SET_CURRENT_USER } from '../actions/types';
import { LOGOUT_USER } from '../actions/types';

const myStorage = window.localStorage;


const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
    console.log(action.payload);
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };

    case LOGOUT_USER:
      myStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        // message for logout?
        user: {}
      }

    default:
      return state;
  }
}