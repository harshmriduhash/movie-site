import React, { Component } from 'react'

class NoMovie extends Component {
    render() {
        return (
            <div className="container text-center">
                <h1 className="text-danger">
                    No movies found!
                </h1>
            </div>
        )
    }
}

export default NoMovie
