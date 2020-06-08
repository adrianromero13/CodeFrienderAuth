import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import { ADD_TODO } from '../actions/types';
import usersReducer from './usersReducer';
import matchesReducer from './matchesReducer';
import eventReducer from './eventReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  event: eventReducer,
  currentUser: profileReducer,
  users: usersReducer,
  auth: authReducer,
  matches: matchesReducer,
  form: formReducer.plugin({
    'addTodo': (state, action) => {
      switch (action.type) {
        case ADD_TODO:
          return undefined;
        default:
          return state;
      }
    }
  })
});
