import styled, { css } from 'styled-components';

const StyledCircleButton = styled.button`
  height: 4rem;
  width: 4rem;
  padding: 0.8rem;

  color: var(--color-white);
  border-radius: 99rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  ${(props) =>
    props.$gray &&
    css`
      background-color: rgba(255, 255, 255, 0.1);

      svg {
        color: var(--color-white);
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      &:active {
        background-color: rgba(255, 255, 255, 0.3);
      }
    `}
`;

function CircleButton({ onClick, icon, title = '', ...props }) {
  return (
    <StyledCircleButton title={title} {...props} onClick={onClick}>
      {icon}
    </StyledCircleButton>
  );
}

export default CircleButton;
