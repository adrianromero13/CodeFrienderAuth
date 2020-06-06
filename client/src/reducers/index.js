import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import counterReducer from './counterReducer';
import todosReducer from './todosReducer';
import authReducer from './authReducer';
import { ADD_TODO } from '../actions/types';
import usersReducer from './usersReducer';
import matchesReducer from './matchesReducer';
import eventReducer from './eventReducer';

export default combineReducers({
  event: eventReducer,
  users: usersReducer,
  auth: authReducer,
  todos: todosReducer,
  counter: counterReducer,
  matches: matchesReducer,
  form: formReducer.plugin({
    'addTodo': (state, action) => {
      switch(action.type) {
        case ADD_TODO:
          return undefined;
        default:
          return state;
      }
    }
  })
});
