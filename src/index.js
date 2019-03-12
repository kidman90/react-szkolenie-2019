import React from 'react';
import ReactDOM from 'react-dom';

export const App = () => (
  <p>
    Witaj na <b>Warsztatach React</b>!
  </p>
);

ReactDOM.render(
  <App />
  , document.getElementById('root')
);
