import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Message } from '../Message';
import { MessageForm } from '../MessageForm';
import { withChat } from '../providers/chat';

const MessageList = styled.div`
  flex: 1;
  overflow: auto;
`;


const Chat = props => {
  if (props.isLoading) {
    return <p>Trwa pobieranie danych</p>;
  }

  return (
    <Fragment>
      <MessageList>
        {props.data.length !== 0 ? (
          props.data.map((item, index) => (
            <Message
              key={index}
              {...item}
            />
          ))
        ) : (
            <p>Brak danych</p>
          )}
      </MessageList>
      <MessageForm onMessage={message => props.create(message)} />
    </Fragment>
  );
};

export default withChat(Chat);
