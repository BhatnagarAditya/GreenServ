import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Utils/ScrollToTop';
// import * as serviceWorker from './serviceWorker';


  ReactDOM.render(
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>, 
    document.getElementById('root')
)
