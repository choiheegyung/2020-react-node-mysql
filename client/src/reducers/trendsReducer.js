// import { FETCH_TRENDS } from '../actions/types';

import axios from 'axios';

export const FETCH_TRENDS = 'fetch_trends';

export const fetchTrends = () => async dispatch => {
    const res = await axios.get('http://localhost:5000/trends');
    dispatch({ type: FETCH_TRENDS, payload: res.data });
};

const trendsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_TRENDS:
            return action.payload;
        default:
            return state;
    }
}

export default trendsReducer;