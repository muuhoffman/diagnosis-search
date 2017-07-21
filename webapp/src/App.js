import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import SearchService from './services/SearchService'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {searchText: "hello", results: null};
  }

  onSearchTextChanged = (searchText) => {
    this.setState({
      searchText: searchText,
    });
  }

  onSearchEntered = (searchText) => {
    var searchService = new SearchService()
    searchService.executeSearch(searchText, (results)=>{
      this.setState({
        results: results,
      })
    });
  }

  render() {
    return (
      <div className="App" style={styles.app}>
        <div>
          <SearchBar parentStyle={styles.search} onSearchTextChanged={this.onSearchTextChanged} onSearchEntered={this.onSearchEntered} searchText={this.state.searchText}/>
          <SearchResults parentStyle={styles.search} results={this.state.results}/>
        </div>
      </div>
    );
  }
}

const colors = {
    primary: "#78A7C0",
    secondary: "#E4DBC7"
}

const styles = {
  app: {
    width: "100%",
    margin: "10px"
  },
  search: {
    width: "40%"
  }
}

export default App;
