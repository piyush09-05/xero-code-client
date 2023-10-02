import React from 'react';
import './Searchbar.css'; // Create a CSS file for styling

function SearchBar() {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
      />

<button className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
