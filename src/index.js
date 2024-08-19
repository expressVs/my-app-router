import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Bpp(){
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}
root.render(
  // browserRouter的属性basename可以设置根路径， 多个项目，进行路由合并的时候使用
  <BrowserRouter basename='pc'>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/bpp" element={<Bpp />} />
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
