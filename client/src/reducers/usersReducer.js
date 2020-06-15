import {
  GET_USERS,
  GET_USERS_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  allUsers: [],
  getUsersError: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, allUsers: action.payload, getUsersError: '' };
    case GET_USERS_ERROR:
      return { ...state, getUsersError: action.payload };
    default:
      return state;
  }
};
