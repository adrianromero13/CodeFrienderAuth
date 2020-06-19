import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import { ADD_TODO } from '../actions/types';
import usersReducer from './usersReducer';
import matchesReducer from './matchesReducer';
import eventReducer from './eventReducer';
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';
import filteredReducer from './filteredReducer';


export default combineReducers({
  event: eventReducer,
  currentUser: profileReducer,
  filteredUsers: filteredReducer,
  users: usersReducer,
  auth: authReducer,
  matches: matchesReducer,
  messages: messageReducer,
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
