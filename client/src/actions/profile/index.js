import {
  GET_USER_DATA,
  GET_USER_DATA_ERROR,
} from '../types';


import axios from 'axios';

export const getUserData = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/users/profile', {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatch({ type: GET_USER_DATA, payload: data });
  } catch (e) {
    dispatch({
      type: GET_USER_DATA_ERROR,
      serverError: e,
      clientError: 'Something went wrong please refresh try again',
    });
  }
};
