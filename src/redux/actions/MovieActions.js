import * as Types from './MovieActionTypes';
import * as AdminServices from '../../services/MovieServices';

export const getAllGenres = (genres) => {
    return {type: Types.GET_ALL_GENRES, payload: genres};
};

export const getAllTrendings = (trendings) => {
    return { type: Types.GET_ALL_TRENDINGS, payload: trendings };
};

export const getMovies = (movies) => {
    return { type: Types.GET_MOVIES, payload: movies };
};

export const clearStateAction = () => {
    return { type: Types.CLEAR_STATE, payload: [] };
};

export const getAllGenresAction = () => (
    (dispatch) => {
        return AdminServices.getGenres()
            .then(data => data.genres)
            .then((genres) => {
                dispatch(getAllGenres(genres));
            })
            .catch(error => console.log(error));
    }
);

export const getAllTrendingsAction = () => (
    (dispatch) => {
        return AdminServices.getTrending()
            .then(data => data.results)
            .then(trendings => {
                dispatch(getAllTrendings(trendings));
            })
            .catch(error => console.log(error));
    }
);

export const getMoviesAction = () => (
    (dispatch) => {
        return AdminServices.getMovies()
            .then(data => data.results)
            .then(movies => {
                dispatch(getMovies(movies));
            })
            .catch(error => console.log(error));
    }
);
