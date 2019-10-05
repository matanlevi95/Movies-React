import * as React from 'react';
import { Component } from 'react';



class Movie extends Component<any, any> {
    render() {
        const divStyle = {
            width: "18rem",
            alignItems: "center",
            display: "inline-block",
            margin: "5px"
        }
        const { Poster, Title, Type, Year, imdbID } = this.props.Movie
        const { GetMoreInfo } = this.props

        return (
            <div className="card" style={divStyle}>
                <img className="card-img-top" src={Poster} alt="Image Not Found"></img>
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Type}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{`Year: ${Year}`}</li>
                    <li className="list-group-item">{`ID: ${imdbID}`}</li>
                </ul>
                <div className="card-body">
                    <a href={`/${Title}`}  className="card-link">More Info</a>
                </div>
            </div>

        );
    }
}

export default Movie;;