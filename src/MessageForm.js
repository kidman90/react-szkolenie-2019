import React, { Component } from 'react';

export class MessageForm extends Component {
  state = {
    value: ''
  };

  submitHandler = e => {
    e.preventDefault();

    if (!this.state.value) {
      return;
    }

    alert(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
      </form>
    );
  }
};
