import React from 'react';
import styled from 'styled-components';
import Nav from './Nav/Nav.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';

const StyledAppLayout = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Nav />
      <Sidebar />
      <h2>Main</h2>
    </StyledAppLayout>
  );
}

export default AppLayout;
