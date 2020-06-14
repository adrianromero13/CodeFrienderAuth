

import {
  GET_USER_EVENTS,
  GET_USER_EVENTS_ERROR,
  LOAD_SPECIFIC_EVENT_ID,
  LOAD_SPECIFIC_EVENT_ID_ERROR,
  DELETE_SPECIFIC_EVENT_BY_ID_ERROR,
  GET_SPECIFIC_EVENT,
  GET_SPECIFIC_EVENT_ERROR,
} from '../types';



import axios from 'axios';

export const getUserEvents = () => async dispatch => {
  try {
    
    const { data } = await axios.get('/api/events', { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_USER_EVENTS, payload: data})
  } catch (e) {
    dispatch({ type: GET_USER_EVENTS_ERROR, serverError: e, clientError: 'Something went wrong. Refresh the page and try again'})
  }
}

export const selectEvent = (id, completed) => async dispatch => {
  try {
    localStorage.setItem('currentEvent', id);
    dispatch({ type: LOAD_SPECIFIC_EVENT_ID, payload: id })
  } catch (e) {
    dispatch({ type: LOAD_SPECIFIC_EVENT_ID_ERROR, payload: e })
  }
}

export const deleteUserEvent = (id, user) => async dispatch => {
try {
  await axios.delete(`/api/events/delete/${id}`, { headers: { 'authorization': localStorage.getItem('token') }});
  const { data } = await axios.get('/api/events', { headers: { 'authorization': localStorage.getItem('token') }});
  dispatch({ type: GET_USER_EVENTS, payload: data})
} catch (e) {
  dispatch({ type: DELETE_SPECIFIC_EVENT_BY_ID_ERROR, payload: e})
}
}

export const selectedEvent = (id) => async dispatch => {
  try {
    const { data } = await axios.get(`/api/events/eventselected/${id}`, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_SPECIFIC_EVENT, payload: data })
  } catch (e) {
    dispatch({ type: GET_SPECIFIC_EVENT_ERROR, payload: e})
  }
}
export const updateEventTitle = (title, id) => async dispatch => {
  try {
    const { data } = await axios.put(`/api/events/title/${id}`, { title }, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_SPECIFIC_EVENT, payload: data })
  } catch (e) {
    dispatch({ type: GET_SPECIFIC_EVENT_ERROR, payload: e})
  }
}
export const updateEventDescription = (description, id) => async dispatch => {
  try {
    const { data } = await axios.put(`/api/events/description/${id}`, { description }, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_SPECIFIC_EVENT, payload: data })
  } catch (e) {
    dispatch({ type: GET_SPECIFIC_EVENT_ERROR, payload: e})
  }
}
export const updateEventLocation = (location, id) => async dispatch => {
  try {
    const { data } = await axios.put(`/api/events/location/${id}`, { location }, { headers: { 'authorization': localStorage.getItem('token') }});
    dispatch({ type: GET_SPECIFIC_EVENT, payload: data })
  } catch (e) {
    dispatch({ type: GET_SPECIFIC_EVENT_ERROR, payload: e})
  }
}