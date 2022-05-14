import { handleResponse } from './apiUtil';
import http from './http-commons';

export const getGenres = () => http.get(`/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then(handleResponse);
export const getTrending = () => http.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(handleResponse);
export const getMovies = (page=1) => http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`).then(handleResponse);
// export const getSuppliersAndProducts = () => http.get('admin/supplier/products').then(handleResponse);
// export const checkProductInStock = (id, quantity) => http.get(`admin/check/stock/product/${id}?quantity=${quantity}`).then(handleResponse);
// export const checkStock = () => http.get('admin/check/stock').then(handleResponse);
// export const authenticateUser = (data) => http.post('admin/user/authorize', data).then(handleResponse);
// export const createUser = (data) => http.post('admin/user/create', data).then(handleResponse);