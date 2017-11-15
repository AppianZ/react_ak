import React from 'react'
import PropTypes from 'prop-types'
import Nav from './../Nav';

const NavToggle = ({ onMenuBtnClick }) => (
  <div className="menu-box">
    <div className="menu-toggle" onClick={onMenuBtnClick}></div>
    <Nav></Nav>
  </div>
)

NavToggle.propTypes = {
  onMenuBtnClick: PropTypes.func,
}

export default NavToggle;