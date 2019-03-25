import React, { Fragment } from 'react';
import styled from 'styled-components';
import { MessageForm } from '../MessageForm';
import { useChat } from '../providers/chat';
import { T } from '../providers/translation';

const MessageList = styled.div`
  flex: 1;
  overflow: auto;
`;

export const Chat = props => {
  const { data, isLoading, create } = useChat();

  return (
    <Fragment>
      <h1><T as="span" label="Witaj na chacie!" /> {Math.random()}</h1>
      {isLoading
        ? <T as="p" label="Trwa pobieranie danych" />
        : (
          <Fragment>
            <MessageList>
              {data.length !== 0 ? (
                data.map((item, index) => (
                  props.renderMessage({
                    key: index,
                    ...item
                  })
                ))
              ) : <T as="p" label="Brak danych" />}
            </MessageList>
            <MessageForm onMessage={message => create(props.login, message)} />
          </Fragment>
        )
      }
    </Fragment>
  );
};
