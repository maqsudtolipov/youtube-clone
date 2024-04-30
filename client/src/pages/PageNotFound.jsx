import React from 'react';
import styled from 'styled-components';
import { RiArchiveStackLine, RiGhostLine, RiHome4Line } from 'react-icons/ri';
import Button from '../components/Button.jsx';

const StyledSignInFirst = styled.div`
  padding-top: 14rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  .icon {
    font-size: 12rem;
  }

  h3 {
    margin-bottom: 1.6rem;
    font-size: 2.4rem;
    font-weight: 400;
  }
`;

const Message = styled.div`
  padding: 2.4rem 0;
`;

const PageNotFound = () => {
  return (
    <StyledSignInFirst>
      <RiGhostLine className="icon" />

      <Message className="message">
        <h3>404 | Page Not Found</h3>
        <p>
          This page isn't available. Sorry about that. Try searching for
          something else.
        </p>
      </Message>

      <Button icon={<RiHome4Line />} bordered={true}>
        Go Home
      </Button>
    </StyledSignInFirst>
  );
};

export default PageNotFound;
