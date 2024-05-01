import React from 'react';
import styled from 'styled-components';
import Tab from './Tab.jsx';
import TabsSearch from './TabsSearch.jsx';

const StyledTabs = styled.div`
  padding: 0 6.4rem;
  display: flex;
  gap: 2.4rem;

  border-bottom: 1px solid var(--color-border);
`;

const Tabs = () => {
  return (
    <StyledTabs>
      <Tab active={true}>Home</Tab>
      <Tab>Videos</Tab>
      <Tab>Playlists</Tab>
      <Tab>Community</Tab>
      <TabsSearch />
    </StyledTabs>
  );
};

export default Tabs;
