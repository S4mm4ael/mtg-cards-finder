import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import stylesApp from './App.module.css';
import styles from './components/Header/Header.module.css';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import AddCardForm from './components/AddCardForm/AddCardForm';

function App() {
  const location = useLocation();
  const path: string = location.pathname;

  function getCurrentTitle() {
    switch (path) {
      case '/about':
        return 'About';
      case '/':
        return 'Main';
      case '/addcard':
        return 'Create';
      default:
        return '';
    }
  }

  return (
    <div className={stylesApp.App}>
      <div className={styles.header}>
        <Link id="main-page" to="/">
          <img className={styles.logo} src="./logo.png" alt="logo" />
        </Link>
        <div className={styles.header__title}>{getCurrentTitle()}</div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/addcard" element={<AddCardForm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
