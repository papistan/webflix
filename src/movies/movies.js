import React, {Component} from 'react';
import Movie from '../movie/movie';

const Movies = props => {
   
    let movies = props.movies.map(movie => <Movie key={movie.id} movie={movie}/>)
     
    return (
        {movies}
    )
}

export default Movies;