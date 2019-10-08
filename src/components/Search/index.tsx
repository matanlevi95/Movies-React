import * as React from 'react';
import { Component } from 'react';




class Search extends Component<any, any> {
    state = {

    }
    render() {
        const { HandleSearch, MoviesApi } = this.props
        return (
            <div>
                <input list="datalist" type="text" onChange={HandleSearch} placeholder="Search for a movie" />
                <datalist id="datalist">
                    <option value="Moana"></option>
                    <option value="Scream"></option>
                    <option value="The Lion King"></option>
                    <option value="Aladin"></option>
                    <option value="Jumanji"></option>
                </datalist>
                <button type="button" className="btn btn-primary" onClick={MoviesApi}>Search</button>
            </div>
        );
    }

}

export default Search;