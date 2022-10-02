import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './headerComp';
import NavMenu from './menuComp';
import Container from './container'

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Header />
    <Container />
    <NavMenu />
  </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
