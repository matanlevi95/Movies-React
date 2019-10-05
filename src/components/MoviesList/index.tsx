import * as React from 'react';
import { Component } from 'react';
import Movie from "../Movie"
import axios from "axios"



class MoviesList extends Component<any, any> {
    GetMoreInfo = (id: any) => {
        axios.get(` http://www.omdbapi.com/?i=${id}&apikey=a503617b`)
            .then(res => {
                const movies = res.data.Search;
                this.setState({ Movies: movies });


            })
    }
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