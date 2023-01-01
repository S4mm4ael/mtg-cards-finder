import React, { useReducer } from 'react';
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
import { ActionKind } from 'reducers/reducerTypes';

function App() {
  const location = useLocation();
  const path: string = location.pathname;
  const initialUrl = 'https://api.magicthegathering.io/v1/cards';
  const initialMin = false;
  const initialPage = 1;
  const initialState = {
    url: initialUrl,
    min: initialMin,
    page: initialPage,
    sort: 'A-Z',
    count: 10,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function setMin() {
    dispatch({ type: ActionKind.UpdateMin, payload: '' });
  }
  function setUrl(newUrl: string) {
    dispatch({ type: ActionKind.UpdateUrl, payload: newUrl });
  }
  function setPage(nextPage: boolean) {
    nextPage
      ? dispatch({ type: ActionKind.NextPage, payload: 'next' })
      : dispatch({ type: ActionKind.PrevPage, payload: 'prev' });
  }
  function setExactPage(page: number) {
    dispatch({ type: ActionKind.ExactPage, payload: page });
  }
  function setSort(sort: string) {
    dispatch({ type: ActionKind.Sort, payload: sort });
  }
  function setCount(count: number) {
    dispatch({ type: ActionKind.Count, payload: count });
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
    <GlobalContext.Provider
      value={{ setUrl, setMin, setPage, setExactPage, setSort, setCount, state }}
    >
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
