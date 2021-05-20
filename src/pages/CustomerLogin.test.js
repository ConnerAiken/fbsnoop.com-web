import React from 'react';
import ReactDOM from 'react-dom';
import CustomerLogin from './CustomerLogin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomerLogin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
