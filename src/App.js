import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Message } from './Message';
import { MessageForm } from './MessageForm';

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

export class App extends Component {
  state = {
    data: this.props.data
  };

  onMessage = message => this.setState(prevState => ({
    data: prevState.data.concat({
      userName: 'BTM',
      message,
      time: Date.now()
    })
  }));

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
