import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const data = [
  {
    userName: 'BTM',
    time: Date.now(),
    message: 'Witaj na szkoleniach z React!'
  },
  {
    userName: 'Gość',
    time: Date.now(),
    message: 'Hej!'
  }
];

ReactDOM.render(
  <App data={data} />
  , document.getElementById('root')
);
