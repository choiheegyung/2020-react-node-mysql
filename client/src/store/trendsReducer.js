const trendsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SELECT_TRENDS_RESULT':
            return action.payload;
        default:
            return state;
    }
}

export default trendsReducer;