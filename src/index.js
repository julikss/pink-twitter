import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <img className="banner-right" src="../../../../../img/pink-banner.jpg" alt="banner"/>
    <img className="banner-left" src="../../../../../img/pink-banner.jpg" alt="banner"/>
    <App />

  </React.StrictMode>
);

