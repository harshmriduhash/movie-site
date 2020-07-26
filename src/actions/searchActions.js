// api is called here!
import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING} from './types';
// dispatch comes from thunk middleware

import axios from 'axios';
import {APIKey} from '../key'; 

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
} // on typing

export const fetchMovies = text => dispatch => {
    axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
        .then(res => dispatch({
            type: FETCH_MOVIES,
            payload: res.data
        }))
        .catch(err => console.log("Error is: " + err));
} // on clicking search!

export const fetchMovie = id => dispatch => {
    axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(res => dispatch({
        type: FETCH_MOVIE,
        payload: res.data
    }))
    .catch(err => console.log("Error is: " + err));
}

export const setLoading = () => {
    return {
        type: LOADING
    }
}