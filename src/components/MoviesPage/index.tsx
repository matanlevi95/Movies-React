import * as React from 'react';
import { Component } from 'react';
import axios from "axios"
import Search from "../Search"
import MoviesList from "../MoviesList"
import Header from "../Header"



class MoviesPage extends Component<any, any> {


    constructor(props: any) {

        super(props)

        this.state = {
            InputField: "",
            Movies: []
        }
    }
    HandleSearch = (e: any) => {
        this.setState({ InputField: e.target.value })

    }

    MoviesApi = () => {
        axios.get(` http://www.omdbapi.com/?i=tt3896198&apikey=a503617b&s=${this.state.InputField}`)
            .then(res => {
                const movies = res.data.Search;
                this.setState({ Movies: movies });


            })
    }
    // http://www.omdbapi.com/?t=${this.state.InputField}&apikey=a503617b

    render() {
        return (
            <div>
                <Header title="Search" />
                <Search HandleSearch={this.HandleSearch} MoviesApi={this.MoviesApi} />
                <MoviesList Movies={this.state.Movies} />
            </div>

        );
    }
}

export default MoviesPage;