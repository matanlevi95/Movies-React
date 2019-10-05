import * as React from 'react';
import { Component } from 'react';




class Search extends Component<any, any> {
    state = {
        
    }
    render() {
        const { HandleSearch, MoviesApi } = this.props
        return (
            <div>
                <input type="text" onChange={HandleSearch} placeholder="Search for a movie" />
                <button type="button" className="btn btn-primary" onClick={MoviesApi}>Search</button>
            </div>
        );
    }
    
}

export default Search;