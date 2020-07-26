import React, {Component} from 'react';
import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';
import Spinner from '../layout/Spinner';

import {connect} from 'react-redux';

class Landing extends Component {
    render() { 
        const {loading} = this.props;
        return (  
            <div className="container Landing">
                <SearchForm />
                {loading ? <Spinner /> : <MoviesContainer /> }
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    // props are available from here.
    loading: state.movies.loading // passing the loading as a prop into our Landing component.
})

export default connect(mapStateToProps)(Landing);