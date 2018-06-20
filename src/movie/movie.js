import React, { Component } from 'react';
import './movie.css';

const Movie = props => {
   
    if (props.movie === undefined ) {
        return <h1>Loading movie.</h1>;
    } 
    let { popularity, id, overview, poster_path, runtime, title, vote_average} = props.movie;
   
    let image = `https://image.tmdb.org/t/p/w500/${poster_path}`;
        
    return (
        <li className="movie-container" >
            <img src={image} alt="movie poster"></img>
            <p> {title} </p>
            <p className="rating"> Rating: {vote_average} </p>
        </li>
    )
    
}

export default Movie;