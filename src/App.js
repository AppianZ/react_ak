/**
 * Created by appian on 2017/10/9.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import reset from './assets/sass/reset.scss';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createHistory from 'history/createHashHistory'
import reducer from './reducers';
import Body from './containers/body';

const store = createStore(reducer);
console.log(store.getState());

const history = createHistory()
history.listen((location, action) => {

})


const element = (
  <Provider store = {store}>
    <HashRouter>
      <Body></Body>
    </HashRouter>
  </Provider>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);