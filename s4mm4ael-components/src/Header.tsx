import React from 'react';

import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const getCurrentTitle = () => {
    switch (location.pathname) {
      case '/':
      default:
        return 'Home page';
      case '/about':
        return 'About';
    }
  };

  return (
    <div className="app-header">
      <div className="app-header__title">{getCurrentTitle()}</div>
    </div>
  );
};
export default Header;
