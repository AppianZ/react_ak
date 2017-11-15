import React from 'react'
import { Route } from 'react-router-dom'
import Home from './../Home';
import About from  './../About'
import PropTypes from 'prop-types';

const App = ({status}) => (
  <div id="App" className={ status ? 'on' : '' }>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </div>
);

App.propTypes = {
  status: PropTypes.bool.isRequired,
}

export default App;
