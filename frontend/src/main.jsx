// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Main entry point for the React application
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Render the app in the element with id 'root'
);
