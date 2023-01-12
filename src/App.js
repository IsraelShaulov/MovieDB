import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
