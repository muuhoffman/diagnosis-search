import React, { Component } from 'react';

import SearchResultRow from './SearchResultRow'

class SearchResults extends Component {

  render() {
    var rows = [];
    if (this.props.results !== null) {
      this.props.results.forEach(function(result, i) {
        rows.push(<SearchResultRow title={result} key={i}/>);
      });
      if (rows.length === 0) {
        rows.push(<SearchResultRow title={"No Results Found"}/>);
      }
    }

    
    return (
      <table style={style.table} width={this.props.parentStyle.width}>
        <tbody style={style.tbody}>
          {rows}
        </tbody>
      </table>
    );
  }
}

const style = {
  table : {
    marginTop: "10px",
  },
  tbody: {
  }
}

export default SearchResults;