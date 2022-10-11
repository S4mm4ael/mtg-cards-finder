import React from 'react';
import './Search.css';
import { setLocalStorage, getLocalStorage } from './setLocalStorage';
function Search(): JSX.Element {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLocalStorage(event.target.value);
  }
  function getChange() {
    return getLocalStorage();
  }
  return (
    <div className="search-wrap">
      <div id="search" className="search">
        <input
          id="search-box"
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          onChange={handleChange}
          value={getChange}
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Search;
