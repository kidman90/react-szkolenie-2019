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
  input[type="submit"] {
    padding: 8px;
    font-size: 1rem;
    /** Chrome OSX */
    -webkit-appearance: initial;
  }
`;

export class MessageForm extends Component {
  state = {
    value: ''
  };

  submitHandler = e => {
    e.preventDefault();

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
        {this.props.button && <input type="submit" value={this.props.button} />}
      </Form>
    );
  }
};

MessageForm.propTypes = {
  onMessage: PropTypes.func
};
