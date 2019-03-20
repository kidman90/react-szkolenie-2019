import React, { Component } from 'react';
import styled from 'styled-components';

import { MessageForm } from '../MessageForm';

const Container = styled.div`
  margin: 0 auto;
  max-width: 500px;
  p {
    background: red;
    color: white;
    padding: 5px;
    text-align: center;
  }
`;

export class Login extends Component {
  state = {
    error: false
  };

  render() {
    return (
      <Container>
        <MessageForm
          button="Zaloguj"
          onMessage={name => {
            if (!name.trim()) {
              this.setState({
                error: true
              });
            } else {
              this.props.onNameChange(name);
            }
          }}
        />
        {this.state.error && <p>Podaj imię</p>}
      </Container>
    );
  }
}
