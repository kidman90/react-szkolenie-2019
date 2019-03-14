import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Message } from './Message';
import { MessageForm } from './MessageForm';
import { api } from './api';

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

const MessageList = styled.div`
  flex: 1;
`;

const messageFormatter = ({ text, date, user }) => ({
  message: text,
  time: new Date(date).getTime(),
  userName: user.userName
});

export class App extends Component {
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
      return (
        <Layout>
          <p>Trwa pobieranie danych</p>
        </Layout>
      );
    }

    return (
      <Layout>
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
      </Layout>
    );
  }
};

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ ...Message.propTypes }))
};
