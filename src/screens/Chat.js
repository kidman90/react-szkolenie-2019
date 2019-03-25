import React, { Fragment } from 'react';
import styled from 'styled-components';
import { MessageForm } from '../MessageForm';
import { useChat } from '../providers/chat';

const MessageList = styled.div`
  flex: 1;
  overflow: auto;
`;

export const Chat = props => {
  const { data, isLoading, create } = useChat();

  return (
    <Fragment>
      <h1>Witaj na chacie! {Math.random()}</h1>
      {isLoading
        ? (
          <p>Trwa pobieranie danych</p>
        ) : (
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
        )
      }
    </Fragment>
  );
};
