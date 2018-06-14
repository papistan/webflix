import Axios from 'axios';



/// API Call 
const movieSearch = term => {

    let apiKey = '50bb8cc380100c5ea082ad86e775e26b';
    let searchQuery = ' ${apiKey}';

    axios
    .get(searchQuery)
    .then(data => {
    self.setState({
        saturday: data.data.events,
        sunday: data.data.events
    });
    })
    .catch(error => {
    console.log(error);
    });

}