import styled from 'styled-components';

import logoNameSvg from '../assets/svg/logo-text.svg';

import { RiMenuLine } from 'react-icons/ri';
import CircleButton from '../components/CircleButton.jsx';
import { LogoName } from '../components/LogoName.jsx';
import Button from '../components/Button.jsx';
import Search from '../components/Search.jsx';

const StyledNav = styled.nav`
  height: 5.6rem;
  padding: 0 1.6rem;

  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavHead = styled.div`
  display: flex;
  align-items: center;
`;

const NavLogo = styled.div`
  padding: 0 1.6rem;

  display: flex;
  align-items: center;
`;

function Nav() {
  return (
    <StyledNav>
      <NavHead>
        <CircleButton icon={<RiMenuLine />} />
        <NavLogo>
          <LogoName src={logoNameSvg} />
        </NavLogo>
      </NavHead>

      <Search />

      <Button>Sign in</Button>
    </StyledNav>
  );
}

export default Nav;
