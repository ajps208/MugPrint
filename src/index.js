import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import OrderContext from './Context/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OrderContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </OrderContext>
  </React.StrictMode>
);

