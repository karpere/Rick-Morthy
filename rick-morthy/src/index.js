import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route, Link, Router,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
          </Routes>
      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
