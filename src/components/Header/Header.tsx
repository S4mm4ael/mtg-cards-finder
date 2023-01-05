import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header(): JSX.Element {
  return (
    <div id="navigation" className="app-header__navigation">
      <ul className={styles.header__list}>
        <li className={styles.header__item}>
          <Link id="main-page" to="/">
            Home
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link id="main-page" to="/cards">
            Cards
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link id="add-page" to="/addcard">
            Create
          </Link>
        </li>
        <li className={styles.header__item}>
          <Link id="about-page" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
