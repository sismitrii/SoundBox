/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import './index.css';
import './utils/sass/main.scss'
import { AppProvider } from './utils/context';


/*===========================================================*/
/*--------------------- React Render ------------------------*/
/*===========================================================*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppProvider>
    </Router>
  </React.StrictMode>
);
