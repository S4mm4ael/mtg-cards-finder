import React, { useContext, useEffect, useState } from 'react';
import styles from './Pagination.module.css';

import { getCards } from 'utils/fetch';
import { GlobalContext } from 'contexts/Context';

function Pagination() {
  const { setPage, setExactPage, state } = useContext(GlobalContext);
  const [number, setNumber] = useState<number>(1);

  useEffect(() => {
    getCards(state.url, state.page);
  }, [state.page, state.url]);

  return (
    <>
      <div className={styles.pagination}>
        <a href="#" onClick={() => setPage(false)}>
          ❮
        </a>
        <div className={styles.shadowed} onClick={() => setPage(false)}>
          {state.page > 1 ? state.page - 1 : <p></p>}
        </div>
        <div>{state.page}</div>
        <div className={styles.shadowed} onClick={() => setPage(true)}>
          {state.page + 1}
        </div>
        <a href="#" onClick={() => setPage(true)}>
          ❯
        </a>
      </div>
      <form className={styles.form} onSubmit={() => setExactPage(number)}>
        <label> Enter page </label>
        <input
          className={styles.text__input}
          type="number"
          value={number}
          min="1"
          max="450"
          onChange={(e) => setNumber(+e.target.value)}
        />
        <input className={styles.button} type="submit" value={'Send'} />
      </form>
    </>
  );
}

export default Pagination;
