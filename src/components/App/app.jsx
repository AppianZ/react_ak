import React from 'react'
import { Route , Switch } from 'react-router-dom'
import Home from './../Home';
import About from  './../About';
import List from  './../List';
import Article from  './../../components/Article';
import NotFound from  './../NotFound';
import PropTypes from 'prop-types';
import createHistory from 'history/createHashHistory';
const history = createHistory();

class App extends React.Component {
  static propTypes = {
    isMd: PropTypes.bool.isRequired,
    status: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    setShowMenuFalse: PropTypes.func,
    toggleLoading: PropTypes.func,
  }

  componentDidMount() {
    const { setShowMenuFalse, toggleLoading } = this.props;
    history.listen((location) => {
      setShowMenuFalse();
      toggleLoading(true);
      setTimeout(() => {
        toggleLoading(false);
      }, 1250);
    })
  }

  render() {
    const { isMd, status, loading } = this.props;

    return (
      <div id="App" className={(isMd? 'md' : '') + ' '
      + (status ? 'on' : '') + ' '
      + (loading ? 'load' : 'loaded')}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route exact path="/articles" component={List}/>
          <Route exact path="/article" component={Article}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    )
  }
}

export default App;
