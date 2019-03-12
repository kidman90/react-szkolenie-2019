import React from 'react';

export const Message = () => {
  const name = 'Maciek';

  return (
    <div>
      <span>{name}</span>
      <time>{new Date().getHours()}:{new Date().getMinutes()}</time>
      <p>
        To jest przykładowa wiadomość :)
      </p>
    </div>
  );
};
