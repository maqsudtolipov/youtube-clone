import styled from 'styled-components';
import {
  RiArchiveStackLine,
  RiArrowDownSLine,
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
import SidebarLink from './StyledSidebarLink.jsx';
import { faker } from '@faker-js/faker';

// TODO: Change when user is auth
const StyledSidebar = styled.div`
  width: 24rem;
  overflow-y: scroll;
`;

const SidebarList = styled.ul`
  padding: 1.2rem;
  border-bottom: 1px solid var(--color-border);
  list-style: none;
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
        <SidebarLink active={true} title="Home" icon={<RiHome4Line />} />
        <SidebarLink title="Shorts" icon={<RiPhoneFindLine />} />
        <SidebarLink title="Subscriptions" icon={<RiArchiveStackLine />} />
      </SidebarList>

      <SidebarList>
        <Heading>You</Heading>
        <SidebarLink title="You" icon={<RiGamepadLine />} />
        <SidebarLink title="History" icon={<RiHistoryLine />} />
        <SidebarLink title="Playlists" icon={<RiPlayList2Fill />} />
        <SidebarLink title="Your videos" icon={<RiVideoLine />} />
        <SidebarLink title="Watch later" icon={<RiTimeLine />} />
        <SidebarLink title="Liked videos" icon={<RiThumbUpLine />} />
        <SidebarLink title="Downloads" icon={<RiVideoDownloadLine />} />
      </SidebarList>

      <SidebarList>
        <Heading>Subscriptions</Heading>

        {/*Fake YouTube creators*/}
        {Array.from(Array(7).keys()).map((el) => (
          <SidebarLink
            title={faker.person.firstName()}
            status={(el === 3 && 'new') || (el === 0 && 'live')}
            img={<img src={faker.image.avatar()} alt="Creator avatar" />}
          />
        ))}

        <SidebarLink title="Show 41 more" icon={<RiArrowDownSLine />} />
      </SidebarList>

      <SidebarList>
        <SidebarLink title="Settings" icon={<RiSettings3Line />} />
        <SidebarLink title="Report History" icon={<RiFlagLine />} />
        <SidebarLink title="Help" icon={<RiQuestionLine />} />
        <SidebarLink title="Send feedback" icon={<RiErrorWarningLine />} />
      </SidebarList>

      <Footer>&copy; 2024 Maqsud</Footer>
    </StyledSidebar>
  );
}

export default Sidebar;
