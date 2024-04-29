import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { useOutsideClick } from '../../hooks/useOutsideClick.js';

const StyledBody = styled.div`
  // Temp
  padding: 1.4rem;

  position: fixed;
  z-index: 2000;
  left: 50%;
  top: 50%;

  background-color: var(--color-modal);
  border-radius: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0.4rem 3.2rem 0;
`;

// Compound Component
const ModalContext = createContext(null);

const Modal = ({ children }) => {
  const [openModal, setOpenModal] = useState('');

  const handleOpen = (name) => setOpenModal(name);
  const handleClose = () => setOpenModal('');

  return (
    <ModalContext.Provider value={{ openModal, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ name, children }) => {
  const { openModal, handleOpen, handleClose } = useContext(ModalContext);

  const handleClick = (e, name) => {
    e.stopPropagation();

    openModal === '' || openModal !== name ? handleOpen(name) : handleClose();
  };

  return cloneElement(children, { onClick: (e) => handleClick(e, name) });
};

const Body = ({ name, children }) => {
  const { openModal, handleClose } = useContext(ModalContext);
  const { ref } = useOutsideClick(handleClose, false);

  if (openModal !== name) return null;

  return <StyledBody ref={ref}>{children}</StyledBody>;
};

Modal.Open = Open;
Modal.Body = Body;

export default Modal;
