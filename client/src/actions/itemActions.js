import axios from 'axios';
import { ADD_ITEM } from './types';

export const addItem = ({ name, price }) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, price });

    axios.post('./api/items', body, config)
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
        
}