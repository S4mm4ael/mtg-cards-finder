import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header(): JSX.Element {
  return (
    <div id="navigation" className="styles.app-header__navigation">
      <ul className={styles.header__list}>
        <li className="header-list__item">
          <Link id="main-page" to="/main">
            Main page
          </Link>
        </li>
        <li className="header-list__item">
          <Link id="add-page" to="/addcard">
            Create
          </Link>
        </li>
        <li className="header-list__item">
          <Link id="about-page" to="/about">
            About
          </Link>
        </li>
        <li className="header-list__item">
          <Link id="404-page" to="/404">
            404
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
