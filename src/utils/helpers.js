import axios from 'axios';


/// API Call 
export const movieSearch = term => {

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

