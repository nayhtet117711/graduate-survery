import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scss/main.scss';
import './css/main.css'
import './css/nice-select.css'
import './css/owl.carousel.css'
import './css/hexagons.min.css'
import './css/linearicons.css'
import './css/font-awesome.min.css'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
