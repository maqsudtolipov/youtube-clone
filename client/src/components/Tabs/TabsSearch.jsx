import React from 'react';
import styled from 'styled-components';
import { RiSearchLine } from 'react-icons/ri';

const StyledTabsSearch = styled.form`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  height: 4rem;
  width: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #aaa;
    font-size: 2.4rem;
  }
`;

const Input = styled.input`
  padding: 0.4rem 0;

  color: var(--color-white);
  background: transparent;
  border: none;
  border-bottom: 2px solid #fff;
  outline: none;
`;

const TabsSearch = () => {
  return (
    <StyledTabsSearch>
      <Button>
        <RiSearchLine />
      </Button>
      <Input type="text" placeholder="Search" />
    </StyledTabsSearch>
  );
};

export default TabsSearch;
