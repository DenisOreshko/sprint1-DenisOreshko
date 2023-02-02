import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { BookPage } from './pages/book';
import { ContractPage } from './pages/contract';
import { MainPage } from './pages/main';
import { TermsPage } from './pages/terms';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/books/:category' element={<MainPage />} />
        <Route path='/terms' element={<TermsPage />} />
        <Route path='/contract' element={<ContractPage />} />
        <Route path='/books/:category/:bookId' element={<BookPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
