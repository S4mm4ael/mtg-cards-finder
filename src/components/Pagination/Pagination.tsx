import React, { useContext } from 'react';
import styles from './Pagination.module.css';

import { GlobalContext } from 'contexts/Context';

function Pagination() {
  const { setPage, state } = useContext(GlobalContext);

  return (
    <>
      <div className={styles.pagination}>
        <a href="#" onClick={() => setPage(false)}>
          ❮
        </a>
        <div>{state.page}</div>
        <a href="#" onClick={() => setPage(true)}>
          ❯
        </a>
      </div>
    </>
  );
}

export default Pagination;
