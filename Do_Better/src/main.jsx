import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for createRoot
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
