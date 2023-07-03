import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css'
import Store from './Redux/_stores'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={Store}>
   <App />
   </Provider>
  </React.StrictMode>
);
