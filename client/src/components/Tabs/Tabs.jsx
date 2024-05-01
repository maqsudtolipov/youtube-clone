import React from 'react';
import styled from 'styled-components';
import Tab from './Tab.jsx';
import TabsSearch from './TabsSearch.jsx';

const StyledTabs = styled.div`
  padding: 0 6.4rem;
  display: flex;
  gap: 2.4rem;

  border-bottom: 1px solid var(--color-border);

  .active {
    color: var(--color-white);
    border-color: var(--color-white);

    &:hover {
      border-color: var(--color-white);
    }
  }
`;

const Tabs = () => {
  return (
    <StyledTabs>
      <Tab to="featured">Home</Tab>
      <Tab to="videos">Videos</Tab>
      <Tab to="playlists">Playlists</Tab>
      <Tab to="community">Community</Tab>
      <TabsSearch />
    </StyledTabs>
  );
};

export default Tabs;
