import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {value: "hello"};
  }

  handleChange(event) {
    console.log("new value: ", event.target.value); 
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

export default SearchBar;