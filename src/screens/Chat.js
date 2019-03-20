import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Message } from '../Message';
import { MessageForm } from '../MessageForm';
import { api } from '../api';

const MessageList = styled.div`
  flex: 1;
  overflow: auto;
`;

const messageFormatter = ({ text, date, user }) => ({
  message: text,
  time: new Date(date).getTime(),
  userName: user.userName
});

export class Chat extends Component {
  state = {
    data: undefined
  };

  componentDidMount() {
    this.interval = setInterval(this.poll, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  poll = () => {
    api.get().then(data =>
      this.setState({
        data: data.items.map(messageFormatter)
      })
    );
  };

  onMessage = message => {
    api.create('Maciek', message);
    this.setState(prevState => ({
      data: prevState.data.concat({
        userName: 'Maciek',
        message,
        time: Date.now()
      })
    }));
  };

  render() {
    if (!this.state.data || !this.state.data.constructor === Array) {
      return <p>Trwa pobieranie danych</p>;
    }

    return (
      <Fragment>
        {!this.state.data.length
          ? (
            <p>Brak danych</p>
          ) : (
            <MessageList>
              {this.state.data.map((elem, index) => <Message key={index} {...elem} />)}
            </MessageList>
          )
        }
        <MessageForm onMessage={this.onMessage} />
      </Fragment>
    );
  }
};
