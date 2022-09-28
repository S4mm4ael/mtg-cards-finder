import React from 'react';
import logo from './logo.svg';
import Header from 'Header';
import notFound from 'notFound';
import About from 'About';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
