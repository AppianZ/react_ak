import React from 'react'
import { Route } from 'react-router-dom'
import Home from './../Home';
import About from  './../About'
import PropTypes from 'prop-types';
import createHistory from 'history/createHashHistory'
const history = createHistory();

class App extends React.Component {
  static propTypes = {
    status: PropTypes.bool.isRequired,
    setShowMenuFalse: PropTypes.func,
  }

  componentDidMount() {
    const { setShowMenuFalse } = this.props;
    history.listen(() => {
      setShowMenuFalse();
    })
  }

  render() {
    const { status } = this.props;

    return (
      <div id="App" className={ status ? 'on' : '' }>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </div>
    )
  }
}

export default App;
