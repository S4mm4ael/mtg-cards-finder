import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NotFoundPage from './components/notFoundPage/notFoundPage';
import About from './components/About/About';
import stylesApp from './App.module.css';
import styles from './components/Header/Header.module.css';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const path: string = location.pathname;

  function getCurrentTitle() {
    switch (path) {
      case '/about':
        return 'About';
      default:
        return '';
    }
  }

  return (
    <div className={stylesApp.App}>
      <div className={styles.header}>
        <img className={styles.logo} src="./logo.png" alt="logo" />
        <div className={styles.header__title}>{getCurrentTitle()}</div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="main" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
