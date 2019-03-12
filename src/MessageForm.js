import React, { Component } from 'react';

export class MessageForm extends Component {
  textInput = React.createRef();

  inputHandler = e => console.log(e.target.value);

  submitHandler = e => {
    e.preventDefault();
    alert(this.textInput.current.value);
    this.textInput.current.value = '';
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" ref={this.textInput} onChange={this.inputHandler} />
      </form>
    );
  }
};
