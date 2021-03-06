/*
    This file contains some code that was borrowed from Traversy Media MERN Tutorial and adapted to this project. There is a link to tutorial
    in the readme.
*/

import axios from 'axios';
import { returnErrors } from './errorActions';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from './types';

  // Get user information from logged in user
  export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    axios.get('/api/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,

            //contains the user and token
            payload: res.data
        }))
        //if there is an invalid token
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
  };

  // Register user action
  export const register = ({ firstName, lastName, email, password }) => dispatch => {

    //Set headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    //Request body
    const body = JSON.stringify({ firstName, lastName, email, password });

    axios.post('./api/users', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            })
        })
  };

  //Login user action
  export const login = ({ email, password }) => dispatch => {

    //headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    //Request body
    const body = JSON.stringify({ email, password });

    axios.post('/api/auth', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            })
        })
  };

  //Logout user
  export const logout = () => {
      return {
          type: LOGOUT_SUCCESS
      }
  }
  
  // Function for setting up token for JWT authentication
  export const tokenConfig = getState => {
    //Get token from localStorage
    const token = getState().auth.token;

    //headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    if(token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
  };
