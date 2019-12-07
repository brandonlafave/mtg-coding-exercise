import React from 'react';
import logo from '../../assets/images/mtg-logo.svg';
import './Header.css';

function Header(props) {
  return (
    <div className="header-wrapper">
      <div className="header-logo-wrapper">
        <img src={logo} className="header-logo" alt="logo" />
      </div>
    </div>
  );
}

export default Header;
