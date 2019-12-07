import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

it('renders the header component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});
