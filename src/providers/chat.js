import { useState, useEffect } from 'react';

import { api } from "../api";

const messageFormatter = ({ text, date, user }) => ({
  message: text,
  time: new Date(date).getTime(),
  userName: user.userName
});

export const ChatProvider = ({ children }) => {
  const [data, setData] = useState(undefined);

  const poll = () => {
    api.get().then(data => setData(data.items.map(messageFormatter)));
  };

  const create = (login, message) => {
    api.create(login, message);
    setData(prevData =>
      [
        {
          userName: login,
          message,
          time: Date.now()
        }
      ].concat(prevData)
    );
  };

  useEffect(() => {
    const interval = setInterval(poll, 1000);
    return () => clearInterval(interval);
  }, []);

  return children({
    data,
    isLoading: data === undefined,
    create
  });
};
