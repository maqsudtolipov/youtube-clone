import styled, { css } from 'styled-components';
import { forwardRef } from 'react';

const List = styled.ul`
  display: flex;
  gap: 1.2rem;

  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const Tab = styled.li`
  height: 3.2rem;
  padding: 0 1.2rem;
  margin: 1.2rem 0;

  display: flex;
  align-items: center;

  font-weight: 500;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  ${({ $active }) =>
    $active &&
    css`
      color: var(--color-bg);
      background-color: var(--color-white);

      &:hover {
        background-color: var(--color-white);
      }
    `}
`;

const tabs = [
  'All',

  'Music',
  'Gaming',
  'Supercar',
  'Playlists',
  'Camping',
  'Classical Music',
  'Gadgets',
  'Recently Uploaded',
  'Music',
  'Gaming',
  'Supercar',
  'Playlists',
  'Camping',
  'Classical Music',
  'Gadgets',
  'Recently Uploaded',

  'New to you',
];

const TabsList = forwardRef(function TabsList({ onScroll }, ref) {
  const activeTab = 1;

  return (
    <List ref={ref} onScroll={onScroll}>
      {tabs.map((tab, i) => (
        <Tab key={Math.random()} $active={i + 1 === activeTab}>
          {tab}
        </Tab>
      ))}
    </List>
  );
});

export default TabsList;
