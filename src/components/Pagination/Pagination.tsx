import React, { useEffect } from 'react';
import styles from './Pagination.module.css';
import { getCards } from 'utils/fetch';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from 'store/store';

function Pagination() {
  const dispatch: AppDispatch = useDispatch();
  const { page, url, isSearching } = useSelector((state: RootState) => state.paginationReducer);

  function movePage(movePage: boolean) {
    movePage ? dispatch({ type: 'NEXT_PAGE' }) : dispatch({ type: 'PREV_PAGE' });
  }
  function setSearching(isSearching: boolean) {
    dispatch({ type: 'IS_SEARCHING', payload: isSearching });
  }
  function setExactPage(page: number) {
    dispatch({ type: 'EXACT_PAGE', payload: page });
  }

  useEffect(() => {
    getCards(page);
  }, [page, url]);

  return (
    <>
      {isSearching && (
        <div>
          <button
            onClick={() => {
              setSearching(false);
              setExactPage(1);
            }}
          >
            Back
          </button>
          <p>Search results:</p>
        </div>
      )}
      {!isSearching && (
        <div className={styles.pagination}>
          <a href="#" onClick={() => movePage(false)}>
            ❮
          </a>
          <div onClick={() => movePage(false)}>{page > 1 ? page - 1 : <p></p>}</div>
          <div>{page}</div>
          <div onClick={() => movePage(true)}>{page + 1}</div>
          <a href="#" onClick={() => movePage(true)}>
            ❯
          </a>
        </div>
      )}
    </>
  );
}

export default Pagination;
