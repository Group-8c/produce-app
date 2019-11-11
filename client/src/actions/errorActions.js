import { GET_ERRORS, CLEAR_ERRORS } from './types';


//return the errors
export const returnErrors = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status, id }
    };
}

//clear the errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
}