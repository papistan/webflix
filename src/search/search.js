import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    constructor(props) {
        super(props);
    
        this.state = { term: "" };
      }

     
      render() {
          return (
              <div className="search-bar">
                <h6> WEBFLIX</h6>
                <div id="magnifying-glass"></div>
                <input
                placeholder="Movie Title"
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}
                />
              </div>
          )
      }

      onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
      }
}


export default Search;