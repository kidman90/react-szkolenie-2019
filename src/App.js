import React from 'react';
import PropTypes from 'prop-types';
import { Message } from './Message';
import { MessageForm } from './MessageForm';

export const App = props => {
  const { data } = props;

  return (
    <React.Fragment>
      {data.map((elem, index) => <Message key={index} {...elem} />)}
      <MessageForm onMessage={message => alert(message)} />
    </React.Fragment>
  );
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ ...Message.propTypes }))
};
