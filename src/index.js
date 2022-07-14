import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import bootstrapCSS from './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bootstrapJS from './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import jQuery from 'jquery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
