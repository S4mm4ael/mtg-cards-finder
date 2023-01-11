import SearchResultFetch from 'components/SearchResultFetch/SearchResultFetch';
import React, { useState } from 'react';
import styles from './Search.module.css';
import { setLocalStorage, getLocalStorage } from './setLocalStorage';
import Pagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';

function Search(): JSX.Element {
  const [query, setQuery] = useState(getLocalStorage());
  const [searchValid, setSearchValid] = useState(true);
  const { min, count, sort } = useSelector((state: RootState) => state.otherReducer);

  const dispatch: AppDispatch = useDispatch();

  function setSearching(isSearching: boolean) {
    dispatch({ type: 'IS_SEARCHING', payload: isSearching });
  }

  function setSort(sort: string) {
    dispatch({ type: 'SORT', payload: sort });
  }
  function setCount(count: number) {
    dispatch({ type: 'COUNT', payload: count });
  }

  function setSearchingQuery(query: string) {
    dispatch({ type: 'SET_QUERY', payload: query });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    handleChange(query);
  }
  function handleChange(query: string): void {
    setSearching(true);
    setLocalStorage(query);
    query.length > 3 ? (setSearchingQuery(query), setSearchValid(true)) : setSearchValid(false);
  }

  function turnMinimized(): void {
    dispatch({ type: 'UPDATE_MIN' });
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
                turnMinimized();
              }}
            />
            <div className="toggler-slider">
              <div
                className={min ? 'toggler-knob style-9' : 'toggler-wrapper toggler-knob checked'}
              ></div>
            </div>
          </label>
        </div>
        <div className={styles.selectors__wrap}>
          <div className={styles.sorting__wrap}>
            <p>Sorting:</p>
            <select
              value={sort}
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
              value={count}
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
