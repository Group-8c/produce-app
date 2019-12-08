import axios from 'axios';
import { ADD_ITEM, DELETE_ITEM } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';


// Admin function for adding shop items to the database
export const addItem = ({ name, price, image }) => (dispatch, getState) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, price, image });

    axios.post('./api/items', body, config)
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
        
}

// Admin function for deleting shop items from the database
export const deleteItem = (id) => (dispatch) => {
    axios.delete(`/api/items/${id}`).then(res =>
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    )
}
