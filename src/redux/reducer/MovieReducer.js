import * as Types from '../actions/MovieActionTypes';

const initialState = [];

const movieReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
    case Types.GET_ALL_GENRES:
        return payload;
    case Types.GET_ALL_TRENDINGS:
        console.log('Data -> GET_ALL_TRENDINGS', payload);
        return payload;
    case Types.CLEAR_STATE:
        return payload;
    default:
        return state;
    }
};

export default movieReducer;