import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Message, Bubble } from './Message';
import { Chat } from './screens/Chat';
import { Login } from './screens/Login';

const Layout = styled.div`
  height: 97vh;
  display: flex;
  flex-direction: column;
  font-family: Arial;
  font-size: 14px;
  line-height: 1.4;
  * {
    box-sizing: border-box;
  }
`;

export const App = () => {
  const [login, setLogin] = useState(undefined);
  const [messageComponent, setMessageComponent] = useState(() => Message);

  return (
    <Layout>
      {login ? (
        <Fragment>
          <Chat login={login} renderMessage={messageComponent} />
          <button onClick={() => setMessageComponent(() => Message)}>
            Wyświetl jako lista
          </button>
          <button onClick={() => setMessageComponent(() => Bubble)}>
            Wyświetl jako bąbelki
            </button>
        </Fragment>
      ) : (
          <Login onNameChange={setLogin} />
        )}
    </Layout>
  );
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};
