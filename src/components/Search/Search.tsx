import React, { useState } from 'react';
import styles from './Search.module.css';
import { setLocalStorage, getLocalStorage } from './setLocalStorage';
function Search(): JSX.Element {
  const [name, setName] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setLocalStorage(event.target.value);
    setName(event.target.value);
    const url = `https://api.magicthegathering.io/v1/cards?name=${name}`;
    console.log(url);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
