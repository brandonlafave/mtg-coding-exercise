import React from 'react';
import './Copy.css';

function Copy(props) {
  const { title, copy } = props;

  return (
    <section className="copy-wrapper">
      { title ? <h1 className="copy-title">{title}</h1> : null }
      { copy ? <p className="copy-text">{copy}</p> : null }
    </section>
  );
}

export default Copy;
