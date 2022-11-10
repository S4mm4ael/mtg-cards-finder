import SearchResultFetch from 'components/SearchResultFetch/SearchResultFetch';
import React, { useState } from 'react';
import styles from './Search.module.css';
import { setLocalStorage, getLocalStorage } from './setLocalStorage';
function Search({ startQuery = '' }): JSX.Element {
  const [query, setQuery] = useState(startQuery);
  const [searchValid, setSearchValid] = useState(true);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const searchInput = document.getElementById('search-box') as HTMLInputElement;
    handleChange(searchInput.value);
  }
  function handleChange(query: string): void {
    setLocalStorage(query);
    query.length > 3
      ? (setQuery(`https://api.magicthegathering.io/v1/cards?name=${query}`), setSearchValid(true))
      : setSearchValid(false);
  }

  return (
    <section className={styles.search__section}>
      <div className={styles.search__wrap}>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          id="search"
          className={styles.search}
        >
          <input
            id="search-box"
            type="text"
            className={styles.searchTerm}
            placeholder="What are you looking for?"
            defaultValue={getLocalStorage()}
          />
          <button type="submit" className={styles.searchButton}>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      {!searchValid && <div style={{ color: 'red' }}>Please, enter at least 4 symbols</div>}
      <SearchResultFetch url={query} />
    </section>
  );
}

export default Search;
