import _ from "lodash";
import React, { Component } from 'react';
import logo from './logo.svg';
import Search from './search/search';
import Movies from './movies/movies';
import { moviesSearch } from './utils/helpers';
import axios from 'axios';
import './App.css';

const apiKey = '50bb8cc380100c5ea082ad86e775e26b';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
    this.moviesSearch('z');
  }
  
  render() {
    const moviesSearch = _.debounce(term => {
      this.moviesSearch(term);
    }, 400);

    return (
      <div className="App">
        <Search onSearchTermChange={moviesSearch}/> 
        <Movies movieList={this.state.movies}/>
      </div>
    );
  }

  moviesSearch = term => {
    let searchQuery = `https://api.themoviedb.org/3/search/company?api_key=${apiKey}&query=${term}`;
    axios
    .get(searchQuery)
    .then(data => {
    
      return this.moviesSort(data.data.results).then(data => data).catch(error => {console.log(error)})
      
    })
    .then(sortedMovies => {
        this.setState({
          movies: sortedMovies
      })
    })
    .catch(error => {
        console.log(error);
    });

  }

  moviesSort = (movies) => {
    let searchTerm;

    let allMoviesArray = movies.map(movie => {

      searchTerm = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US`;
      
      return axios
        .get(searchTerm)
        .then(data =>  {
          let movieObject = data.data;
          let { popularity, id, overview, poster_path, runtime, title, vote_average } = movieObject;
          let movieDetailsArray = {id, popularity, overview, poster_path, runtime, title, vote_average };
          
          return movieDetailsArray
        })
        .catch(error => {
            console.log(error);
        });
    })
   
    const resolvedMovies = Promise.all(allMoviesArray)
     .then(movies =>  movies.filter(movie => movie !== undefined))
     .then(movies => movies.sort((a,b)=> a.popularity - b.popularity) )
     .catch(error => {console.log(error)});
    
   return resolvedMovies
  }
}

export default App;
