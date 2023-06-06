import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App'; // Update the relative path based on the file structure
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
