/*===========================================================*/
/*------------------------- Import --------------------------*/
/*===========================================================*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import './index.css';


/*===========================================================*/
/*--------------------- React Render ------------------------*/
/*===========================================================*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
