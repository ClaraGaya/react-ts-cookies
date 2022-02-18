import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { About } from './screens/About';
import { Home } from './screens/Home';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
