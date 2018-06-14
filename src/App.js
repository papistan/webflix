import React, { Component } from 'react';
import logo from './logo.svg';
import Search from './search/search';
import Movies from './movies/movies';
// import { movieSearch } from './utils/helpers';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
    this.movieSearch = this.movieSearch.bind(this);
   
  }

   movieSearch = term => {

    let apiKey = '50bb8cc380100c5ea082ad86e775e26b';
    let searchQuery = 'https://api.themoviedb.org/3/search/company?api_key=${apiKey}&query=${term}';

    axios
    .get(searchQuery)
    .then(data => {
    this.setState({
        moview: data.results
    });
    })
    .catch(error => {
    console.log(error);
    });

}
  
  render() {
    return (
      <div className="App">
        <Search onSearchTermChange={term => this.movieSearch(term)}/> 
        <Movies movieList={this.state.movies}/>
      </div>
    );
  }
}

export default App;
