import React from 'react';
import logo from '../../assets/images/mtg-loader.svg';
import './Loader.css';

function Loader(props) {
  const { isLoading } = props;

  function renderLoader() {
    return (
      <div className={`loader-wrapper`}>
        <img className="loader-spinner" src={logo} alt="Loading" />
      </div>
    )
  }

  return isLoading ? renderLoader(isLoading) : null;
}

export default Loader;
