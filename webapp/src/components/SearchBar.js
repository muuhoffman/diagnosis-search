import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.onSearchTextChanged(event.target.value);
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onSearchEntered(this.props.searchText)
    }
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search Diagnosis"
        style={Object.assign(style.textbox, this.props.parentStyle)}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

const style = {
  textbox: {
    textIndent: "10px",
    padding: "10px 0px",
    fontSize: "18px",
    border: "0px",
    boxShadow: "2px 2px grey"  
  }
}

export default SearchBar;