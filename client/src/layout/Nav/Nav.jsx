import styled from 'styled-components';

import Button from '../../components/Button/Button.jsx';
import Search from '../../components/Search.jsx';
import NavHead from './NavHead.jsx';
import CircleButton from '../../components/Button/CircleButton.jsx';
import { RiMenuLine, RiNotification2Line } from 'react-icons/ri';
import Modal from '../../components/Modal/Modal.jsx';

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
      <Modal>
        <Modal.Open name="notifications">
          <CircleButton icon={<RiNotification2Line />} />
        </Modal.Open>
        <Modal.Body name="notifications">
          <p>Latest notifications</p>
        </Modal.Body>
      </Modal>
    </StyledNav>
  );
}

export default Nav;
