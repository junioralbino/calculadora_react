import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculador from './main/Calculador';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>Calculadora</h1>
      <Calculador />  
    </div>
  </React.StrictMode>
);

