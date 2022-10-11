import React from 'react';
import './Search.css';

function Search(): JSX.Element {
  const searchQuery = 'searchQuery';
  const searchData = 'Hello world';

  const setLocalStorage = (id: string, data: string) => {
    window.localStorage.setItem(id, JSON.stringify(data));
  };

  setLocalStorage(searchQuery, searchData);

  return (
    <div className="search-wrap">
      <div id="search" className="search">
        <input type="text" className="searchTerm" placeholder="What are you looking for?" />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Search;
