import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from './Nav/Nav.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import Tabs from '../components/Tabs.jsx';
import Main from './Main/Main.jsx';
import { Outlet } from 'react-router-dom';

const StyledAppLayout = styled.div``;

// TODO: Move toggle sidebar to context, because state re-renders main
function AppLayout() {
  const [isHidden, setIsHidden] = useState(false);
  const [isFolded, setIsFolded] = useState(false);

  function handleHide() {
    setIsHidden((s) => !s);
  }

  function handleFold() {
    setIsFolded((s) => !s);
  }

  return (
    <StyledAppLayout>
      <Nav onHide={handleHide} onFold={handleFold} />
      <Sidebar isHidden={isHidden} isFolded={isFolded} />
      <Main isHidden={isHidden} isFolded={isFolded}>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
