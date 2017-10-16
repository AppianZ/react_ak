/**
 * Created by appian on 2017/10/9.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import reset from './assets/sass/reset.scss';
import { BrowserRouter as Router, HashRouter} from 'react-router-dom'
import App from './components/App/index';

const root = document.getElementById('root');
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1 className="hello">
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  root
);