import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import New from './New'
import Edit from './Edit'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/new" element={<New />}/>
      <Route path="/edit" element={<Edit />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
