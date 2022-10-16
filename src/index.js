import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/';
import AppBanner from './components/app-banners'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppBanner />
    <App />
  </React.StrictMode>
);

