import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class Header extends Component {
  static propTypes = {
    onMenuBtnClick: PropTypes.func,
  }

  componentDidMount() {
  }

  render() {
    const { onMenuBtnClick } = this.props;

    return (
      <div id="headerBox">
        <div id="header">
          <span id="headerLogo"></span>
          <div id="headerLineWrap" onClick={onMenuBtnClick}><div><span></span><span></span><span></span></div></div>
        </div>
        <div id="popList" onClick={onMenuBtnClick}>
          <ul>
            <li className="on"><Link to="/">Home</Link></li>
            <li><Link to="/">Articles</Link></li>
            <li><a href="https://github.com/AppianZ" target="_blank">GitHub</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
