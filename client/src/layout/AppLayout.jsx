import React from 'react';
import styled from 'styled-components';
import Nav from './Nav.jsx';
import Sidebar from './Sidebar.jsx';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
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
