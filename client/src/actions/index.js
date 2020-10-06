import axios from 'axios';
import { FETCH_TRENDS } from './types';

export const fetchTrends = (param) => async dispatch => {
    const res = await axios.get('http://localhost:5000/trends', {
        params: {
            ID: 12345
        }
    });
    dispatch({ type: FETCH_TRENDS, payload: res.data });
};