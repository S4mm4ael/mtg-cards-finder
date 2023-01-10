import SearchResultFetch from 'components/SearchResultFetch/SearchResultFetch';
import React, { useContext, useState } from 'react';
import styles from './Search.module.css';
import { setLocalStorage, getLocalStorage } from './setLocalStorage';
import { GlobalContext } from 'contexts/Context';
import Pagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';

function Search(): JSX.Element {
  const [query, setQuery] = useState(getLocalStorage());
  const [searchValid, setSearchValid] = useState(true);

  //
  const dispatch = useDispatch();
  const minimized = useSelector((state) => state.min);
  //
  console.log(minimized);

  const { setMin, setSort, setCount, setIsSearching, setSearchingQuery, state } =
    useContext(GlobalContext);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    handleChange(query);
  }
  function handleChange(query: string): void {
    setIsSearching(true);
    setLocalStorage(query);
    query.length > 3 ? (setSearchingQuery(query), setSearchValid(true)) : setSearchValid(false);
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
        <div className={styles.selectors__wrap}>
          <div className={styles.sorting__wrap}>
            <p>Sorting:</p>
            <select
              value={state.sort}
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
          <div className={styles.sorting__wrap}>
            <p>Cards per page:</p>
            <select
              value={state.count}
              onChange={(e) => {
                setCount(+e.target.value);
              }}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>
      </div>
      <Pagination />
      {!searchValid && <div style={{ color: 'red' }}>Please, enter at least 4 symbols</div>}

      <SearchResultFetch />
    </section>
  );
}

export default Search;
