import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux imports
import { Provider } from 'react-redux';
// Import Config function of App Store
import {createAppStore} from './store/config/storeConfig'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createAppStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
