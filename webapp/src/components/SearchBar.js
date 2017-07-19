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
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

export default SearchBar;