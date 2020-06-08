import {
  GET_MATCHES,
  GET_MATCHES_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  allMatches: [],
  allMatchesError: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MATCHES:
      return { ...state, allMatches: action.payload, getUsersError: '' };
    case GET_MATCHES_ERROR:
      return { ...state, getMatchesError: action.payload };
    default:
      return state;
  }
};
