import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';

function Header(): JSX.Element {
  const location = useLocation();
  const path: string = location.pathname;

  const getCurrentTitle = () => {
    switch (path) {
      case '/main':
        return 'Main page';
      case '/about':
        return 'About';
      default:
        return '404';
    }
  };

  return (
    <div className="app-header">
      <div className="app-header__title">{getCurrentTitle()}</div>
      <div className="app-header__navigation">
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
    </div>
  );
}
export default Header;
