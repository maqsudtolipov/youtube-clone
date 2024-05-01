import styled, { css } from 'styled-components';

const StyledTabs = styled.div`
  height: 4.8rem;
  display: flex;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 500;
  color: #aaa;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-color: #aaa;
  }

  ${({ $active }) =>
    $active === true &&
    css`
      color: var(--color-white);
      border-color: var(--color-white);

      &:hover {
        border-color: var(--color-white);
      }
    `}
`;

const Tab = ({ active = false, children }) => {
  return <StyledTabs $active={active}>{children}</StyledTabs>;
};

export default Tab;
