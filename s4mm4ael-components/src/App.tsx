import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import NotFoundPage from './components/notFoundPage/notFoundPage';
import About from './components/About/About';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="main" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
