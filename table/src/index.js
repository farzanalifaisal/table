import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import store from './redux/store.js';
import App from './App.js';
import Data from './redux/data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Data />
      <App />
    </Provider>
  </React.StrictMode>
);
