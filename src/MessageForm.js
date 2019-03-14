import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  padding: 5px 0;
  display: flex;
  input[type="text"] {
    flex: 1;
    padding: 8px;
    font-size: 1rem;
  }
`;

export class MessageForm extends Component {
  state = {
    value: ''
  };

  submitHandler = e => {
    e.preventDefault();

    if (!this.state.value) {
      return;
    }

    this.props.onMessage && this.props.onMessage(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
      </Form>
    );
  }
};

MessageForm.propTypes = {
  onMessage: PropTypes.func
};
