import styled, { css } from 'styled-components';
import {
  RiArchiveStackLine,
  RiBasketballLine,
  RiBroadcastLine,
  RiErrorWarningLine,
  RiFireLine,
  RiFlagLine,
  RiGamepadLine,
  RiHistoryLine,
  RiHome4Line,
  RiLightbulbLine,
  RiMusicLine,
  RiNewspaperLine,
  RiPhoneFindLine,
  RiPlayList2Fill,
  RiQuestionLine,
  RiSettings3Line,
  RiThumbUpLine,
  RiTimeLine,
  RiVideoDownloadLine,
  RiVideoLine,
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

const Heading = styled.h3`
  padding: 0.4rem 1.2rem;
  font-size: 1.6rem;
  font-weight: 500;
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
          <span>Subscriptions</span>
        </SideBarLink>
      </SidebarList>

      <SidebarList>
        <SideBarLink>
          <RiGamepadLine />
          <span>You</span>
        </SideBarLink>
        <SideBarLink>
          <RiHistoryLine />
          <span>History</span>
        </SideBarLink>
        <SideBarLink>
          <RiPlayList2Fill />
          <span>Playlists</span>
        </SideBarLink>
        <SideBarLink>
          <RiVideoLine />
          <span>Your videos</span>
        </SideBarLink>
        <SideBarLink>
          <RiTimeLine />
          <span>Watch later</span>
        </SideBarLink>
        <SideBarLink>
          <RiThumbUpLine />
          <span>Liked videos</span>
        </SideBarLink>
        <SideBarLink>
          <RiVideoDownloadLine />
          <span>Downloads</span>
        </SideBarLink>
      </SidebarList>

      <SidebarList>
        <Heading>Explore</Heading>
        <SideBarLink>
          <RiFireLine />
          <span>Trending</span>
        </SideBarLink>
        <SideBarLink>
          <RiMusicLine />
          <span>Music</span>
        </SideBarLink>
        <SideBarLink>
          <RiBroadcastLine />
          <span>Live</span>
        </SideBarLink>
        <SideBarLink>
          <RiGamepadLine />
          <span>Gaming</span>
        </SideBarLink>
        <SideBarLink>
          <RiNewspaperLine />
          <span>News</span>
        </SideBarLink>
        <SideBarLink>
          <RiBasketballLine />
          <span>Sports</span>
        </SideBarLink>
        <SideBarLink>
          <RiLightbulbLine />
          <span>Learning</span>
        </SideBarLink>
      </SidebarList>

      <SidebarList>
        <SideBarLink>
          <RiSettings3Line />
          <span>Settings</span>
        </SideBarLink>
        <SideBarLink>
          <RiFlagLine />
          <span>Report History</span>
        </SideBarLink>
        <SideBarLink>
          <RiQuestionLine />
          <span>Help</span>
        </SideBarLink>
        <SideBarLink>
          <RiErrorWarningLine />
          <span>Send feedback</span>
        </SideBarLink>
      </SidebarList>

      <Footer>&copy; 2024 Maqsud</Footer>
    </StyledSidebar>
  );
}

export default Sidebar;
