import React, { Component } from 'react';

import SearchResultRow from './SearchResultRow'

class SearchResults extends Component {

  render() {
    var rows = [];
    this.props.results.forEach(function(result, i) {
      rows.push(<SearchResultRow title={result} key={i}/>);
    });
    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default SearchResults;