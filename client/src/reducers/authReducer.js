/*
    React-Redux reducer file for user authentication actions (logging in, registering, etc.)
    This file contains some code borrowed from Traversy Media and adapted to this project. (Link in readme)
*/

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from '../actions/types';

  const initialState = {
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      isAdmin: false,
      isLoading: false,
      user: null
      
  }

  export default function(state = initialState, action) {
      switch(action.type) {
          case USER_LOADING:
              return {
                  ...state,
                  isLoading: true
                };

            case USER_LOADED:
                return {
                    ...state,
                    isAuthenticated: true,
                    isLoading: false,
                    user: action.payload
                };
            case LOGIN_SUCCESS:
            case REGISTER_SUCCESS:
                localStorage.setItem('token', action.payload.token);
                
                return {
                    ...state,
                    ...action.payload,
                    isAdmin: action.payload.user.isAdmin,
                    isAuthenticated: true,
                    isLoading: false
                };

            case AUTH_ERROR:
            case LOGIN_FAIL:
            case LOGOUT_SUCCESS:
            case REGISTER_FAIL:
                localStorage.removeItem('token');
                return {
                    ...state,
                    token: null,
                    user: null,
                    users: null,
                    isAuthenticated: false,
                    isAdmin: false,
                    isLoading: false
                }

            default:
                return state;
      }
  }
