import React from 'react';
import styles from './Search.module.css';
import { setLocalStorage, getLocalStorage } from './setLocalStorage';
function Search(): JSX.Element {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLocalStorage(event.target.value);
  }

  return (
    <div className={styles.search__wrap}>
      <div id="search" className={styles.search}>
        <input
          id="search-box"
          type="text"
          className={styles.searchTerm}
          placeholder="What are you looking for?"
          onChange={handleChange}
          defaultValue={getLocalStorage()}
        />
        <button type="submit" className={styles.searchButton}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Search;
