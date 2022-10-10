import React from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getCurrentTitle = () => {
    switch (location.pathname) {
      case '/home':
      default:
        return 'Home page';
      case '/about':
        return 'About';
    }
  };

  return (
    <div className="app-header">
      <div className="app-header__title">{getCurrentTitle()}</div>
      <div className="app-header__navigation">
        <ul className="header-list">
          <li className="header-list__item">
            <a href="/main">Main page</a>
          </li>
          <li className="header-list__item">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
