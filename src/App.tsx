import React from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import stylesApp from './App.module.css';
import styles from './components/Header/Header.module.css';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import AddCardForm from './pages/AddCardForm/AddCardForm';
import CardDetails from 'pages/CardDetails/CardDetails';
import Home from 'pages/Home/Home';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

function App() {
  const location = useLocation();
  const path: string = location.pathname;
  const cardId = useSelector((state: RootState) => state.otherReducer.id);

  function getCurrentTitle() {
    switch (path) {
      case '/':
        return 'MTG Card Finder';
      case '/about':
        return 'About';
      case '/cards':
        return 'Cards';
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
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/addcard" element={<AddCardForm />} />
        <Route path="/card/:id" element={<CardDetails id={cardId} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
