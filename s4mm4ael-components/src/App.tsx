import React from 'react';
import logo from './logo.svg';
import Header from 'Header';
import Home from 'Home';
import NotFoundPage from 'notFoundPage';
import About from 'About';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Redirect from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
