import {
    GET_USERS,
    GET_USERS_ERROR,
    GET_MATCHES,
    GET_MATCHES_ERROR,
} from '../types';


import axios from 'axios';

export const getAllUsers = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/users');
        dispatch({ type: GET_USERS, payload: data });
    } catch (e) {
        dispatch({ type: GET_USERS_ERROR, payload: 'Something went wrong, please refresh the page to try again' });
    }
};

export const getAllMatches = () => async dispatch => {
    try { 
        const { data } = await axios.get('/api/users/matches', { headers: { 'authorization': localStorage.getItem('token')} });
        dispatch({ type: GET_MATCHES, payload: data });
    } catch (e) {
        dispatch({ type: GET_MATCHES_ERROR, payload: 'Something went wrong, please refresh the page to try again' });
    }
};
