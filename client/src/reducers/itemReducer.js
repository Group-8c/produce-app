/*
    React-Redux reducer file for admin item actions for managing shop items
*/

import {
    ADD_ITEM, DELETE_ITEM
  } from '../actions/types';

const initialState = {
    items: []
    
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }

          default:
              return state;
    }
}
