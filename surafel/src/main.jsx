import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// for rtl format comment out bootstrap.min.css and uncomment bootstrap.rtl.min.css
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.rtl.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./sass/stylesheet.scss";

import "./index.scss";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
