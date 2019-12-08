import React from 'react';
import logo from '../../assets/images/mtg-logo.svg';
import './Header.css';

function Header(props) {
  return (
    <header className="header-wrapper" role="banner">
      <div className="header-logo-wrapper">
        <img src={logo} className="header-logo" alt="Magic the Gathering logo" />
      </div>
    </header>
  );
}

export default Header;
