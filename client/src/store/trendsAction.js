import axios from 'axios';

export const fetchTrends = () => async dispatch => {
    const res = await axios.get('http://localhost:5000/trends');
    dispatch({ type: 'SELECT_TRENDS_RESULT', payload: res.data });
}
