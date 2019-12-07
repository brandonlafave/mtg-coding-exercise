import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-logo-wrapper">
          <img src={logo} className="header-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
