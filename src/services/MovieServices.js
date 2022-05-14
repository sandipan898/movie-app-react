import { handleResponse } from './apiUtil';
import http from './http-commons';

export const getGenres = () => http.get(`/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then(handleResponse);
export const getTrending = () => http.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(handleResponse);
export const getMovies = (query, pageNumber=1) => http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}`).then(handleResponse);
