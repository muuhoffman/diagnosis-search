import React, { Component } from 'react';

class SearchResultRow extends Component {
  render() {
    return (
      <tr style={style.row}>
        <td>
          <p style={style.title}>{this.props.title}</p>
        </td>
      </tr>
    );
  }
}

const style = {
  row: {
    border: "1px solid black",
    backgroundColor: "white",
  },
  column: {
    color: "white"
  },
  title: {
    color: "black",
    paddingLeft: "10px"
  },
}

export default SearchResultRow;