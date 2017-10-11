/**
 * Created by appian on 2017/10/9.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter} from 'react-router-dom'
import App from './components/App';

const root = document.getElementById('root');
ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>
  , root);