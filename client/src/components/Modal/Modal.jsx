import { cloneElement, createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import { useOutsideClick } from '../../hooks/useOutsideClick.js';
import { RiCloseLine, RiNotification2Line } from 'react-icons/ri';
import CircleButton from '../Button/CircleButton.jsx';

const StyledBody = styled.div`
  width: 56rem;
  padding: 2.4rem;
  max-height: 40rem;

  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2000;
  left: 50%;
  top: 50%;
  translate: -50% -50%;

  color: var(--color-white);
  background-color: var(--color-modal);
  border-radius: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0.4rem 3.2rem 0;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  height: 100%;
  overflow: scroll;
`;

// Compound Component
const ModalContext = createContext(null);

const Modal = ({ children }) => {
  const [modalName, setModalName] = useState('');

  const handleOpen = (name) => setModalName(name);
  const handleClose = () => setModalName('');

  return (
    <ModalContext.Provider value={{ modalName, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ name, children }) => {
  const { modalName, handleOpen, handleClose } = useContext(ModalContext);

  const handleClick = (e, name) => {
    e.stopPropagation();

    modalName === '' || modalName !== name ? handleOpen(name) : handleClose();
  };

  return cloneElement(children, { onClick: (e) => handleClick(e, name) });
};

const Body = ({ name, children }) => {
  const { modalName, handleClose } = useContext(ModalContext);
  const { ref } = useOutsideClick(handleClose, false);

  if (modalName !== name) return null;

  return (
    <StyledBody ref={ref}>
      <Header>
        <h2>About</h2>
        <CircleButton icon={<RiCloseLine />} onClick={handleClose} />
      </Header>

      <Info>{children}</Info>
    </StyledBody>
  );
};

Modal.Open = Open;
Modal.Body = Body;

export default Modal;
