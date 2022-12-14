import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './layouts/header';
import {LotList} from './features/lot-list/lot-list';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/lots' element={<LotList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
