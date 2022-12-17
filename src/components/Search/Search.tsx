import SearchResultFetch from 'components/SearchResultFetch/SearchResultFetch';
import React, { useContext, useState } from 'react';
import styles from './Search.module.css';
import { setLocalStorage, getLocalStorage } from './setLocalStorage';
import { GlobalContext } from 'contexts/Context';

function Search(): JSX.Element {
  const [query, setQuery] = useState(getLocalStorage());
  const [searchValid, setSearchValid] = useState(true);

  const { setUrl, setMin, state } = useContext(GlobalContext);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    handleChange(query);
  }
  function handleChange(query: string): void {
    setLocalStorage(query);
    query.length > 3
      ? (setUrl(`https://api.magicthegathering.io/v1/cards?name=${query}`), setSearchValid(true))
      : setSearchValid(false);
  }

  return (
    <section className={styles.search__section} id="search-section">
      <div className={styles.top__wrap}>
        <div className={styles.search__wrap}>
          <form
            onChange={(e) => {
              handleSubmit(e);
            }}
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
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <button type="submit" className={styles.searchButton}>
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className={styles.min__wrap}>
          Minimize cards:
          <label className="toggler-wrapper style-9">
            <input
              name="minimaze"
              type="checkbox"
              onChange={() => {
                state.min ? setMin(false) : setMin(true);
              }}
            />
            <div className="toggler-slider">
              <div
                className={
                  state.min ? 'toggler-knob style-9' : 'toggler-wrapper toggler-knob checked'
                }
              ></div>
            </div>
          </label>
        </div>
      </div>

      {!searchValid && <div style={{ color: 'red' }}>Please, enter at least 4 symbols</div>}

      <SearchResultFetch />
    </section>
  );
}

export default Search;
