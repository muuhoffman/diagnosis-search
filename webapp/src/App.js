import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import SearchService from './services/SearchService'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {searchText: "hello", results: []};
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchBar onSearchTextChanged={this.onSearchTextChanged} onSearchEntered={this.onSearchEntered} searchText={this.state.searchText}/>
        <SearchResults results={this.state.results}/>
      </div>
    );
  }
}

export default App;
