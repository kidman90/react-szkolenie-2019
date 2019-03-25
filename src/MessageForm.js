import React, { useState } from 'react';
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

export const MessageForm = ({ onMessage = () => { }, button }) => {
  const [value, setValue] = useState('');

  const submitHandler = e => {
    e.preventDefault();

    onMessage && onMessage(value);
    setValue('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {button}
    </Form>
  );
};

MessageForm.propTypes = {
  onMessage: PropTypes.func
};
