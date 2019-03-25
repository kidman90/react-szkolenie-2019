import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Message, Bubble } from './Message';
import { Chat } from './screens/Chat';
import { Login } from './screens/Login';
import { TranslationProvider, LanguageSwitch, T } from './providers/translation';

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

const Language = styled.div`
  position: absolute;
  right: 8px;
`;

export const App = () => {
  const [login, setLogin] = useState(undefined);
  const [messageComponent, setMessageComponent] = useState(() => Message);

  return (
    <TranslationProvider>
      <Layout>
        <Language>
          <LanguageSwitch to="pl">PL</LanguageSwitch>
          <LanguageSwitch to="en">EN</LanguageSwitch>
          <LanguageSwitch to="de">DE</LanguageSwitch>
        </Language>
        {login ? (
          <Fragment>
            <Chat login={login} renderMessage={messageComponent} />
            <T
              as="button"
              label="Wyświetl jako lista"
              onClick={() => setMessageComponent(() => Message)}
            />
            <T
              as="button"
              label="Wyświetl jako bąbelki"
              onClick={() => setMessageComponent(() => Bubble)}
            />
          </Fragment>
        ) : <Login onNameChange={setLogin} />}
      </Layout>
    </TranslationProvider>
  );
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};
