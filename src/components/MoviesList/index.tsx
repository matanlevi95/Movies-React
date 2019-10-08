import * as React from 'react';
import { Component } from 'react';
import Movie from "../Movie"



class MoviesList extends Component<any, any> {
    
    render() {
        const { Movies } = this.props

        return (
            <div>
                {Movies.map((movie: any) => {
                    return <Movie Movie={movie} />
                })}
            </div>
        );
    }

}

export default MoviesList;