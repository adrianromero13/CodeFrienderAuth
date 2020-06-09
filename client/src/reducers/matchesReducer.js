import {
  GET_MATCHES,
  GET_MATCHES_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  allMatches: {
    forMe: [],
    forThem: [],
    best: []
  },
  allMatchesError: '',
};

export default function (state = INITIAL_STATE, action) {
  console.log(action.payload)
  switch (action.type) {
    case GET_MATCHES:
      return { ...state, allMatches: action.payload, getUsersError: '' };
    case GET_MATCHES_ERROR:
      return { ...state, getMatchesError: action.payload };
    default:
      return state;
  }
};
