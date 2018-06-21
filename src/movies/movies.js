import React from "react";
import Movie from "../movie/movie";
import "./movies.css";

const Movies = props => {
  const movies = props.movieList.map(movie => {
    return <Movie key={movie.id} movie={movie} />;
  });

  return <ul className="movies-container">{movies}</ul>;
};

export default Movies;
