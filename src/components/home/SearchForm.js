import React, { Component } from 'react';
import {searchMovie, fetchMovies, setLoading} from '../../actions/searchActions';
import {connect} from 'react-redux';

class SearchForm extends Component {

    handleChange = e => {
        this.props.searchMovie(e.target.value);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search" /> Search for a Movie or a TV Series ..
                    </h1>
                    <form id="searchForm" onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control" onChange={this.handleChange} name="searchText" placeholder="Search Movies, TV Series .." />
                        <button type="submit" className="btn btn-primary btn-lg mt-3">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ // state is the global state object
    text: state.movies.text // here, 'movies' contains all the searchReducer states.
})

export default connect(mapStateToProps, {searchMovie, fetchMovies, setLoading})(SearchForm);
// use connect for connecting the component to REDUX states!
// mapStateToProps is used for mapping and providing REDUX state data to the other components in form of props.
// Here, we can use these functions which are connected to REDUX state
// The functions are now usable as props inside this component!