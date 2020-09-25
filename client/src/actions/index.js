import axios from 'axios';
import { FETCH_TRENDS } from './types';

export const fetchTrends = () => async dispatch => {
    const res = await axios.get('http://localhost:5000/trends');
    dispatch({ type: FETCH_TRENDS, payload: res.data });
};