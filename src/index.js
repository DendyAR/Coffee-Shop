import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/index.css';
import "../src/style/products.css"
import "../src/style/yourcart.css"
import "../src/style/header.css"
import "../src/style/footer.css"
import "../src/style/dashboard.css"
import "../src/style/favoriteProducts.css"
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
