import React from 'react'
import { Route } from 'react-router-dom'
import Home from './../Home';
import About from  './../About';
import List from  './../List';
import Article from  './../../containers/Article';
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
    toggleMarkdown: PropTypes.func,
  }

  componentDidMount() {
    const { toggleMarkdown, setShowMenuFalse, toggleLoading } = this.props;
    history.listen((location) => {
      setShowMenuFalse();
      toggleLoading(true);
     /* if (/about/.test(location.pathname)) toggleMarkdown(true);
      else toggleMarkdown(false);*/
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
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/articles" component={List}/>
        <Route path="/article" component={Article}/>
      </div>
    )
  }
}

export default App;
