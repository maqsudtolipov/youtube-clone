import styled from 'styled-components';

import Button from '../../components/Button.jsx';
import Search from '../../components/Search.jsx';
import NavHead from './NavHead.jsx';

// TODO: Change when user is auth
const StyledNav = styled.nav`
  height: 5.6rem;
  padding: 0 1.6rem;

  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Nav() {
  return (
    <StyledNav>
      <NavHead />
      <Search />
      <Button>Sign in</Button>
    </StyledNav>
  );
}

export default Nav;
