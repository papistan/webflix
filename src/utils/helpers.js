import axios from "axios";

const apiKey = "";
/// Movies Search API Call

export function moviesSearch(term) {
  let searchQuery = `https://api.themoviedb.org/3/search/company?api_key=${apiKey}&query=${term}`;
  axios
    .get(searchQuery)
    .then(data => {
      return moviesSort(data.data.results)
        .then(data => data)
        .catch(error => {
          console.log(error);
        });
    })
    .then(sortedMovies => {
      this.setState({
        movies: sortedMovies
      });
    })
    .catch(error => {
      console.log(error);
    });
}

export function moviesSort(movies) {
  let searchTerm;

  let allMoviesArray = movies.map(movie => {
    searchTerm = `https://api.themoviedb.org/3/movie/${
      movie.id
    }?api_key=${apiKey}&language=en-US`;

    return axios
      .get(searchTerm)
      .then(data => {
        let movieObject = data.data;
        let {
          popularity,
          id,
          overview,
          poster_path,
          runtime,
          title,
          vote_average
        } = movieObject;
        let movieDetailsArray = {
          id,
          popularity,
          overview,
          poster_path,
          runtime,
          title,
          vote_average
        };

        return movieDetailsArray;
      })
      .catch(error => {
        console.log(error);
      });
  });

  const resolvedMovies = Promise.all(allMoviesArray)
    .then(movies => movies.filter(movie => movie !== undefined))
    .then(movies => movies.sort((a, b) => a.popularity - b.popularity))
    .catch(error => {
      console.log(error);
    });

  return resolvedMovies;
}
