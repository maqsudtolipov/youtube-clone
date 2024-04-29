import React from 'react';
import Tabs from '../../components/Tabs.jsx';
import styled from 'styled-components';
import Content from '../../components/Content/Content.jsx';
import { Outlet } from 'react-router-dom';

const StyledMain = styled.main`
  height: calc(100vh - 5.6rem);
  margin-left: 24rem;
  margin-top: 5.6rem;

  // Temp
  padding: 0 2.4rem;

  overflow-y: scroll;

  * .hidden {
    margin-left: 0;
  }

  * .folded {
    margin-left: 7.2rem;
  }

  .videos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1.4rem;
    row-gap: 4rem;
  }
`;

const Main = ({ isHidden, isFolded }) => {
  return (
    <StyledMain
      className={`${isHidden ? 'hidden' : ''} ${isFolded ? 'folded' : ''}`}
    >
      <Outlet />
    </StyledMain>
  );
};

export default Main;
