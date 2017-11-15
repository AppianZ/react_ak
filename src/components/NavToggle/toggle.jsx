import React from 'react'
import PropTypes from 'prop-types'
import Nav from './../Nav';

const NavToggle = ({ onMenuClick }) => (
  <div className="menu-box">
    <div className="menu-toggle" onClick={onMenuClick}></div>
    <Nav></Nav>
  </div>
)

NavToggle.propTypes = {
  onMenuClick: PropTypes.func,
}

export default NavToggle;