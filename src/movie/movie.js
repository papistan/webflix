import React, { Component } from 'react';
import './movie.css';

const Movie = props => {
   
    if (props.movie === undefined ) {
        return <h1>Loading movie.</h1>;
    } 
    let { popularity, id, overview, poster_path, runtime, title, vote_average} = props.movie;

    
    let image = (poster_path === null ?  `https://christopherscottdesigner.files.wordpress.com/2014/05/this-poster-is-not-available-christopher-scott1.jpg` : `https://image.tmdb.org/t/p/w500/${poster_path}`);
        
    return (
        <li className="movie-container" >
            <img src={image} alt="movie poster"></img>
            <p> {title} </p>
            <p className="rating"> Rating: {vote_average} </p>
            <div className="movie-info">
                <p className="runtime">{runtime} mins</p>
                <p className="overview">{overview}</p>
            </div>
        </li>
    )
    
}

export default Movie;