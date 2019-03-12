import React from 'react';
import PropTypes from 'prop-types';
import { Message } from './Message';

export const App = (props) => {
  const { data } = props;

  return data.map(elem => <Message key={elem.userName} {...elem} />);
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ ...Message.propTypes }))
};
