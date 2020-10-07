import { FETCH_TRENDS } from '../actions/types';

const trendsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_TRENDS:
            return action.payload;
        default:
            return state;
    }
}

export default trendsReducer;