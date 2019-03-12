import React from 'react';
import PropTypes from 'prop-types';

export const Message = ({ userName, time, message }) => (
  <div>
    <span>{userName}</span>
    <time>{new Date(time).getHours()}:{new Date(time).getMinutes()}</time>
    <p>{message}</p>
  </div>
);

Message.propTypes = {
  userName: PropTypes.string,
  time: PropTypes.number,
  message: PropTypes.string
};

Message.defaultProps = {
  userName: 'Anonim'
};
