import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    // Each class-based component has a state object.
    // Whenever the component's state changes, it re-renders
    // (and so do its children).
    this.state = {
      term: '',
    };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  // Each component class needs a render function that returns some JSX!
  render() {
    // Controlled form input: value is controlled by state, NOT the other way around
    return (
      <div className="search-bar">
        <input
          value={this.state.searchTerm}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
