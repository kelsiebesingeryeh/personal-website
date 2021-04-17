import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  router,
  document.getElementById('root'),
);
