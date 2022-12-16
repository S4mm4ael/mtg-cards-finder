import React, { useState, useReducer } from 'react';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';
import stylesApp from './App.module.css';
import styles from './components/Header/Header.module.css';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import AddCardForm from './pages/AddCardForm/AddCardForm';
import { GlobalContext } from 'contexts/Context';
import { reducer } from 'reducers/reducer';
import { updateAction } from 'reducers/reducerTypes';

function App() {
  const location = useLocation();
  const path: string = location.pathname;
  const initialUrl = 'https://api.magicthegathering.io/v1/cards?page=$2&pageSize=$10';
  const initialMin = false;

  const [state, dispatch] = useReducer(reducer, initialMin);

  const [url, setUrl] = useState(initialUrl);
  //const [min, setMin] = useState(initialMin);

  function setMin() {
    dispatch(updateAction);
  }

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
    <GlobalContext.Provider value={{ url, setUrl, setMin, state }}>
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
    </GlobalContext.Provider>
  );
}

export default App;
