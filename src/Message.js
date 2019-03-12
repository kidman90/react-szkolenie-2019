import React from 'react';

export const Message = (props) => {
  const { userName, time, message } = props;

  return (
    <div>
      <span>{userName}</span>
      <time>{new Date(time).getHours()}:{new Date(time).getMinutes()}</time>
      <p>{message}</p>
    </div>
  );
};
