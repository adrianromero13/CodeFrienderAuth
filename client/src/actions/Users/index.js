import {
    GET_USERS,
    GET_USERS_ERROR,
  } from '../types';
  
  
  import axios from 'axios';
  
  export const getAllUsers = () => async dispatch => {
      try {
          const { data } = await axios.get('/api/users');
          dispatch({ type: GET_USERS, payload: data });
      } catch (e) {
          dispatch({ type: GET_USERS_ERROR, payload: 'Something went wrong, please refresh the page to try again'});
      }
  };
    