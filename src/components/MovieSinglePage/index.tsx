import * as React from 'react';
import { Component } from 'react';
import axios from "axios"

class MovieSinglePage extends Component<any, any> {
    state = {
        Movie: null
    }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=a503617b`).then(res => {
            this.setState({
                Movie: res.data
            })
        }).catch(ex => {
            console.log(ex)
        })
    }



    render() {
        const { Movie } = this.state
        if (!Movie) return <h1>Loading...</h1>
        return (<span>{JSON.stringify(this.state.Movie)} </span>)
    }



}

export default MovieSinglePage;