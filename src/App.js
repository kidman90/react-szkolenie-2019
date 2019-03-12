import React from 'react';
import PropTypes from 'prop-types';
import { Message } from './Message';
import { MessageForm } from './MessageForm';

export const App = (props) => {
  const { data } = props;

  return (
    <React.Fragment>
      {data.map(elem => <Message key={elem.userName} {...elem} />)}
      <MessageForm />
    </React.Fragment>
  );
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ ...Message.propTypes }))
};
