import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Bpp (){
  return (
    <div>
      <h1> BPP </h1>
    </div>
  )
}

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/app" element={<App />} />
        <Route path="/bpp" element={<Bpp />} />
      </Route>
    </Routes>
  </BrowserRouter>

);
