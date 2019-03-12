import React from 'react';

export const MessageForm = () => {
  const textInput = React.createRef();

  const inputHandler = e => console.log(e.target.value);

  const submitHandler = e => {
    e.preventDefault();
    alert(textInput.current.value);
    textInput.current.value = '';
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={textInput} onChange={inputHandler} />
    </form>
  );
};
