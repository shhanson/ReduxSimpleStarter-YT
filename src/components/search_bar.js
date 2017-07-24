import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    // Error thrown if you forget to include call to super.
    super(props);

    // Each class-based component has a state object.
    // Whenever the component's state changes, it re-renders
    // (and so do its children).
    this.state = {
      searchTerm: 'Search stuff',
    };
  }

  // Each component class needs a render function that returns some JSX!
  render() {
    // Controlled form input: value is controlled by state, NOT the other way around
    return (
      <div>
        <input
          value={this.state.searchTerm}
          onChange={event => this.setState({ searchTerm: event.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
