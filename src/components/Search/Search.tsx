import React from 'react';
import './Search.css';
import setLocalStorage from './setLocalStorage';
function Search(): JSX.Element {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // const searchBox = document.getElementById('search-box') as HTMLInputElement;
    // setLocalStorage(searchBox.value);
    console.log(event.target.value);
    setLocalStorage(event.target.value);
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
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Search;
