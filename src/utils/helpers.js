import axios from 'axios';

const apiKey = '50bb8cc380100c5ea082ad86e775e26b';
/// Movies Search API Call 
export const moviesSearch = term => {

    let searchQuery = `https://api.themoviedb.org/3/search/company?api_key=${apiKey}&query=${term}`;

    axios
    .get(searchQuery)
    .then(data => {
        this.setState({
            movies: data.data.results
        });
    })
    .catch(error => {
        console.log(error);
    });

}

// Movie Details API call
export const movieDetailSearch = id => {
        let movieId = id;
        let searchTerm = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
        let movieInfo = null;

        axios
        .get(searchTerm)
        .then(data => {
            this.setState({
            movie: data.data
            })
        })
        .catch(error => {
            console.log(error);
        });
    
}