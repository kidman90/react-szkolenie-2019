import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement(
    'div',
    null,
    [
      'Witaj na',
      // 'Witaj na ',
      ' ',
      React.createElement('b', { key: 'bold' }, 'Warsztatach z React'),
      '!'
    ]
  ), document.getElementById('root'));
