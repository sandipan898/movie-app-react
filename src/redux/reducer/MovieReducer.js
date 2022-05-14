import * as Types from '../actions/MovieActionTypes';

const initialState = [];

const movieReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
    case Types.GET_ALL_GENRES:
        console.log('GET_ALL_GENRES', state);
        return {...state, genres: payload};
    case Types.GET_ALL_TRENDINGS:
        console.log('Data -> GET_ALL_TRENDINGS', payload);
        return {...state, trendings: payload};
    case Types.GET_MOVIES:
        console.log('Data -> GET_MOVIES', payload);
        return {...state, movies: payload};
    case Types.CLEAR_STATE:
        return payload;
    default:
        return state;
    }
};

export default movieReducer;