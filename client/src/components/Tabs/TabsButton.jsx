import styled, { css } from 'styled-components';
import CircleButton from '../Button/CircleButton.jsx';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;

  display: none;

  &::before {
    content: '';

    display: inline-block;
    height: 4rem;
    width: 4rem;
  }

  ${({ $position }) =>
    $position === 'right' &&
    css`
      right: 0;
      background-image: linear-gradient(
        to left,
        var(--color-bg) 50%,
        rgba(255, 255, 255, 0)
      );
    `}

  ${({ $position }) =>
    $position === 'left' &&
    css`
      flex-direction: row-reverse;
      right: auto;
      left: 0;
      background-image: linear-gradient(
        to right,
        var(--color-bg) 50%,
        rgba(255, 255, 255, 0)
      );
    `}

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      display: flex;
    `}
`;

function TabsButton({ isVisible, position, onClick }) {
  return (
    <ButtonContainer $isVisible={isVisible} $position={position}>
      <CircleButton
        title="Previous"
        icon={
          position === 'left' ? <RiArrowLeftSLine /> : <RiArrowRightSLine />
        }
        onClick={onClick}
      />
    </ButtonContainer>
  );
}

export default TabsButton;
