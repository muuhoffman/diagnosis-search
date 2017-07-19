class SearchService {

    executeSearch(searchText, callback) {
        // TODO: make a real search request here
        setTimeout(function(){
            var results = searchText.split('')
            callback(results);
        }, 1000);
        
    }

}

export default SearchService;