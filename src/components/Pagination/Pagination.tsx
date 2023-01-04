import React, { useContext, useEffect, useState } from 'react';
import styles from './Pagination.module.css';

import { getCards } from 'utils/fetch';
import { GlobalContext } from 'contexts/Context';

function Pagination() {
  const { setPage, state } = useContext(GlobalContext);

  useEffect(() => {
    getCards(state.url, state.page);
  }, [state.page, state.url]);

  return (
    <>
      <div className={styles.pagination}>
        <a href="#" onClick={() => setPage(false)}>
          ❮
        </a>
        <div onClick={() => setPage(false)}>{state.page > 1 ? state.page - 1 : <p></p>}</div>
        <div>{state.page}</div>
        <div onClick={() => setPage(true)}>{state.page + 1}</div>
        <a href="#" onClick={() => setPage(true)}>
          ❯
        </a>
      </div>
    </>
  );
}

export default Pagination;
