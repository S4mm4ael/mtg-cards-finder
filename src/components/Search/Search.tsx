import SearchResultFetch from 'components/SearchResultFetch/SearchResultFetch';
import React, { useState } from 'react';
import styles from './Search.module.css';
import { setLocalStorage, getLocalStorage } from './setLocalStorage';
function Search({ startQuery = '' }): JSX.Element {
  const [query, setQuery] = useState(startQuery);
  const [searchValid, setSearchValid] = useState(true);
  const [minimazed, setMinimazed] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function closeModal(e: React.MouseEvent<HTMLDivElement>) {
    const element = e.target as HTMLDivElement;
    if (!element.classList.contains(styles.card)) {
      setShowShadow(false);
      setShowModal(false);
    }
  }

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
    <section className={styles.search__section} id="search-section">
      {showShadow && (
        <div
          className={styles.shadowed}
          onClick={(e) => {
            closeModal(e);
          }}
        ></div>
      )}
      <div className={styles.top__wrap}>
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
        <div className={styles.min__wrap}>
          Minimize cards:
          <label className="toggler-wrapper style-9">
            <input
              name="minimaze"
              type="checkbox"
              onChange={() => {
                minimazed ? setMinimazed(false) : setMinimazed(true);
              }}
            />
            <div className="toggler-slider">
              <div className="toggler-knob"></div>
            </div>
          </label>
        </div>
      </div>

      {!searchValid && <div style={{ color: 'red' }}>Please, enter at least 4 symbols</div>}

      <SearchResultFetch
        url={query}
        min={minimazed}
        setShowShadow={setShowShadow}
        modal={showModal}
      />
    </section>
  );
}

export default Search;
