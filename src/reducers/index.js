import {combineReducers} from 'redux';
import searchReducer from './searchReducer';


export default combineReducers({
    movies: searchReducer // movies takes it values from the searchReducer
});