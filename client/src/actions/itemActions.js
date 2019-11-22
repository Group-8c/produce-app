import axios from 'axios';
import { ADD_ITEM, DELETE_ITEM } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

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

export const deleteItem = (id) => (dispatch) => {
    axios.delete(`/api/items/${id}`).then(res =>
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    )
}