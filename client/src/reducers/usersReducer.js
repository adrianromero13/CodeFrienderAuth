import {
  GET_USERS,
  GET_USERS_ERROR,
  // GET_CURRENT_USER,
  // GET_CURRENT_USER_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  // currentUser: [],
  // getCurrentUserError: '',
  allUsers: [],
  getUsersError: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    // case GET_CURRENT_USER:
    //   return { ...state, currentUser: action.payload, };
    // case GET_CURRENT_USER_ERROR:
    //   return { ...state, getCurrentUserError: action.payload };
    case GET_USERS:
      return { ...state, allUsers: action.payload, getUsersError: '' };
    case GET_USERS_ERROR:
      return { ...state, getUsersError: action.payload };
    default:
      return state;
  }
};
