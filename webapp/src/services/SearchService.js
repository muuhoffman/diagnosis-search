import axios from 'axios'

class SearchService {

    /**
     * 
     * @param {*} searchText string of search text
     * @param {*} callback closure taking an array of strings
     */
    executeSearch(searchText, callback) {
        axios.get('http://localhost:5000/api/v1/diagnosis', {
            params: {
                q: searchText
            }
        }).then(function (response) {
            var results = response.data.results.map((x) => {
                return x.name
            });
            callback(results)
        }).catch(function (error) {
            console.log(error);
        });
    }

}

export default SearchService;