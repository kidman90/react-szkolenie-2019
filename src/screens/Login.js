import React, { useState } from 'react';
import styled from 'styled-components';
import { MessageForm } from '../MessageForm';
import { T } from '../providers/translation';

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

export const Login = ({ onNameChange }) => {
  const [error, setError] = useState(false);

  return (
    <Container>
      <MessageForm
        button={<T as="button" label="Zaloguj" />}
        onMessage={name => {
          if (!name.trim()) {
            setError(true);
          } else {
            onNameChange(name);
          }
        }}
      />
      {error && <T as="p" label="Podaj imię" />}
    </Container>
  );
};
