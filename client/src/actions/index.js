import axios from 'axios';
import { FETCH_TRENDS } from './types';

export const fetchTrends = (params) => async dispatch => {
    const res = await axios.get('http://localhost:5000/trends', {
        params: {
            term: '222',
            startdate: '2020-09-08',
            enddate: '2020-09-10'
        }
    });
    dispatch({ type: FETCH_TRENDS, payload: res.data });
};