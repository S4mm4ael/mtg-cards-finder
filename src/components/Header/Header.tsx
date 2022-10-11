import React from 'react';
import './Header.css';

function Header(): JSX.Element {
  return (
    <div id="navigation" className="app-header__navigation">
      <ul className="header-list">
        <li className="header-list__item">
          <a id="main-page" href="/main">
            Main page
          </a>
        </li>
        <li className="header-list__item">
          <a id="about-page" href="/about">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
