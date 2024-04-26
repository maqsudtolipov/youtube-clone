import CircleButton from '../../components/CircleButton.jsx';
import { RiMenuLine } from 'react-icons/ri';
import { LogoName } from '../../components/LogoName.jsx';
import logoNameSvg from '../../assets/svg/logo-text.svg';
import styled from 'styled-components';

const StyledNavHead = styled.div`
  display: flex;
  align-items: center;
`;

const NavLogo = styled.div`
  padding: 0 1.6rem;

  display: flex;
  align-items: center;
`;

function NavHead() {
  return (
    <StyledNavHead>
      <CircleButton icon={<RiMenuLine />} />
      <NavLogo>
        <LogoName src={logoNameSvg} />
      </NavLogo>
    </StyledNavHead>
  );
}

export default NavHead;
