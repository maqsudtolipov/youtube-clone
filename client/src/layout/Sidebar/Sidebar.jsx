import styled, { css } from 'styled-components';
import {
  RiArchiveStackLine,
  RiHistoryLine,
  RiHome4Line,
  RiNewspaperLine,
  RiPhoneFindLine,
} from 'react-icons/ri';

const StyledSidebar = styled.div`
  width: 24rem;
  overflow-y: scroll;
`;

const SidebarList = styled.div`
  padding: 1.2rem;
  border-bottom: 1px solid var(--color-border);
`;

const SideBarLink = styled.div`
  height: 4rem;
  padding: 0 1.2rem;

  display: flex;
  align-items: center;
  gap: 2.4rem;

  border-radius: 1rem;

  // TEMP
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${(props) =>
    props.$active &&
    css`
      background-color: rgba(255, 255, 255, 0.1);

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    `}
`;

const Footer = styled.footer`
  padding: 1.6rem 2.4rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: #717171;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarList>
        <SideBarLink $active>
          <RiHome4Line />
          <span>Home</span>
        </SideBarLink>
        <SideBarLink>
          <RiPhoneFindLine />
          <span>Shorts</span>
        </SideBarLink>
        <SideBarLink>
          <RiArchiveStackLine />
          <span>Subscription</span>
        </SideBarLink>
      </SidebarList>

      <SidebarList>
        <SideBarLink>
          <RiNewspaperLine />
          <span>You</span>
        </SideBarLink>
        <SideBarLink>
          <RiHistoryLine />
          <span>History</span>
        </SideBarLink>
      </SidebarList>

      <Footer>&copy; 2024 Maqsud</Footer>
    </StyledSidebar>
  );
}

export default Sidebar;
