import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ListingProvider} from './Context'

ReactDOM.render(
  <ListingProvider>
    <Router>
      <App />
    </Router>
  </ListingProvider>
, document.getElementById('root'));
serviceWorker.unregister();
