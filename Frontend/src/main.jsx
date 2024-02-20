import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './store.js';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <Provider store={store} >
    <App />
    <ToastContainer />
  </Provider>

  // </React.StrictMode>,
)
