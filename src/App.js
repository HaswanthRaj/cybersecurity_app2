import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home';
import Select from './select'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={ <Select/>} />
      </Routes>
    </div>
  );
}