import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Message, Bubble } from './Message';
import Chat from './screens/Chat';
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

export class App extends Component {
  state = {
    login: undefined,
    messageComponent: Message
  };

  render() {
    return (
      <Layout>
        {this.state.login ? (
          <Fragment>
            <Chat
              login={this.state.login}
              renderMessage={this.state.messageComponent}
            />
            <button
              onClick={() =>
                this.setState({
                  messageComponent: Message
                })
              }
            >
              Wyświetl jako lista
            </button>
            <button
              onClick={() =>
                this.setState({
                  messageComponent: Bubble
                })
              }
            >
              Wyświetl jako bąbelki
            </button>
          </Fragment>
        ) : (
            <Login
              onNameChange={name =>
                this.setState({
                  login: name
                })
              }
            />
          )}
      </Layout>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};
