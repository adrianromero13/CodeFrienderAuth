import {
  GET_USER_DATA,
  GET_USER_DATA_ERROR,
  // GET_OTHER_USERS,
  // GET_OTHER_USERS_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  getUserData: [],
  // getOtherUsers: [],
  // getOtherUsersError: '',
  getServerError: '',
  getClientError: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, getUserData: action.payload, getCleintError: '', getServerError: '' };
    case GET_USER_DATA_ERROR:
      return { ...state, getCleintError: action.cleintError, getServerError: action.serverError };
    // case GET_OTHER_USERS:
    //   return { ...state, getOtherUsers: action.payload, getOtherUsersError: '' };
    // case GET_OTHER_USERS_ERROR:
    //   return { ...state, getOtherUsersError: action.payload };
    default:
      return state;
  }
};
