import React, { Component }  from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    onMenuBtnClick: PropTypes.func,
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
            <li className={this.props.url === '0' ? 'on' : ''}><Link to={this.props.url === '0' ? '' : '/'}>Home</Link></li>
            <li className={this.props.url === '1' ? 'on' : ''}><Link to={this.props.url === '1' ? '' : '/articles'}>Articles</Link></li>
            <li><a href="https://github.com/AppianZ" target="_blank">GitHub</a></li>
            <li className={this.props.url === '2' ? 'on' : ''}><Link to={this.props.url === '2' ? '' : '/about'}>About</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
