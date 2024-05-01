import React from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  padding: 14rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  h3 {
    margin-bottom: 1.6rem;
    font-size: 2.4rem;
    font-weight: 400;
  }
`;

const Icon = styled.div`
  svg {
    font-size: 12rem;
  }
`;

const Message = styled.div`
  padding: 2.4rem 0;
`;

const Error = ({ icon, message, description, button }) => {
  return (
    <StyledError>
      {icon && <Icon>{icon}</Icon>}

      <Message className="message">
        <h3>{message}</h3>
        <p>{description}</p>
      </Message>

      {button && button}
    </StyledError>
  );
};

export default Error;
