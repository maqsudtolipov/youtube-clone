import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from './Nav/Nav.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';

const StyledAppLayout = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;

  // TODO: move
  .main {
    margin-left: 24rem;
  }

  .main--hidden {
    margin-left: 0;
  }
`;

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
      <h2 className={`main ${isHidden ? 'main--hidden' : ''}`}>Main</h2>
    </StyledAppLayout>
  );
}

export default AppLayout;
