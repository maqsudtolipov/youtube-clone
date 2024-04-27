import styled from 'styled-components';

import Button from '../../components/Button.jsx';
import Search from '../../components/Search.jsx';
import NavHead from './NavHead.jsx';

// TODO: Change when user is auth
const StyledNav = styled.nav`
  height: 5.6rem;
  width: 100%;
  padding: 0 1.6rem;

  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Nav({ onHide, onFold }) {
  return (
    <StyledNav>
      <NavHead onHide={onHide} onFold={onFold} />
      <Search />
      <Button>Sign in</Button>
    </StyledNav>
  );
}

export default Nav;
