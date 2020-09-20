const trends = {
    id: null,
    pub_date: null,
    contents: null,
    moreinfo: null,
    image_path: null
};

const trendsReducer = (state = trends, action) => {
    switch (action.type) {
        case 'SELECT_TRENDS_RESULT':
            return action.payload;
        default:
            return state;
    }
}

export default trendsReducer;