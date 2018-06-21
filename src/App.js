import _ from "lodash";
import React, { Component } from "react";
import Search from "./search/search";
import Movies from "./movies/movies";
import { moviesSearch } from "./utils/helpers";
import "./App.css";

const apiKey = "50bb8cc380100c5ea082ad86e775e26b";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
    this.moviesSearch = moviesSearch.bind(this);
    this.moviesSearch("z");
  }

  render() {
    const moviesSearch = _.debounce(term => {
      this.moviesSearch(term);
    }, 400);

    return (
      <div className="App">
        <Search onSearchTermChange={moviesSearch} />
        <Movies movieList={this.state.movies} />
      </div>
    );
  }
}

export default App;
