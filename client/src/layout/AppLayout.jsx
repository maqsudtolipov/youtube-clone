import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from './Nav/Nav.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import Tabs from '../components/Tabs.jsx';

const StyledAppLayout = styled.div`
  // TODO: move
  .main {
    height: calc(100vh - 5.6rem);
    margin-left: 24rem;
    margin-top: 5.6rem;

    // Temp
    padding: 0 2.4rem;

    overflow-y: scroll;
  }

  .main--hidden {
    margin-left: 0;
  }

  .main--folded {
    margin-left: 7.2rem;
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
      <div
        className={`main ${isHidden ? 'main--hidden' : ''} ${isFolded ? 'main--folded' : ''}`}
      >
        <Tabs />
      </div>
    </StyledAppLayout>
  );
}

export default AppLayout;
