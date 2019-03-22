import React, { Fragment } from 'react';
import styled from 'styled-components';
import { MessageForm } from '../MessageForm';
import { ChatProvider } from '../providers/chat';

const MessageList = styled.div`
  flex: 1;
  overflow: auto;
`;

export const Chat = props => {
  return (
    <Fragment>
      <h1>Witaj na chacie! {Math.random()}</h1>
      <ChatProvider>
        {({ data, isLoading, create }) => {
          if (isLoading) {
            return <p>Trwa pobieranie danych</p>;
          }
          return (
            <Fragment>
              <MessageList>
                {data.length !== 0 ? (
                  data.map((item, index) => (
                    props.renderMessage({
                      key: index,
                      ...item
                    })
                  ))
                ) : (
                    <p>Brak danych</p>
                  )}
              </MessageList>
              <MessageForm onMessage={message => create(props.login, message)} />
            </Fragment>
          );
        }}
      </ChatProvider>
    </Fragment>
  );
};
