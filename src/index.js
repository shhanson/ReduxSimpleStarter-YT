import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBxGJy3UGSE5zI6_2Hr3u0iABu1sxMphkA';

// Create a new component class called App
const App = () =>
  (<div>
    <SearchBar />
  </div>);

// Add an instance of the App component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
