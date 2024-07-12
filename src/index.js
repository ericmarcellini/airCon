import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Render the main App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
