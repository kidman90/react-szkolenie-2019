import React from 'react';
import { Message } from './Message';

export const App = () =>
  <Message
    // userName="Maciek"
    time={Date.now()}
    message="To jest przykładowa wiadomość :)"
  />;
