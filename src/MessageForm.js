import React from 'react';

export const MessageForm = () =>
  <input type="text" onChange={inputHandler} />;

const inputHandler = e => console.log(e.target.value);
