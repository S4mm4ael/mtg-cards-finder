import React from 'react';
import styles from './Header.module.css';

function Header(): JSX.Element {
  return (
    <div id="navigation" className="styles.app-header__navigation">
      <ul className={styles.header__list}>
        <li className="header-list__item">
          <a id="main-page" href="/">
            Main page
          </a>
        </li>
        <li className="header-list__item">
          <a id="add-page" href="/addcard">
            Create
          </a>
        </li>
        <li className="header-list__item">
          <a id="about-page" href="/about">
            About
          </a>
        </li>
        <li className="header-list__item">
          <a id="404-page" href="/404">
            404
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
