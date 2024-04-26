import styled, { css } from 'styled-components';
import { RiUserLine } from 'react-icons/ri';

const StyledButton = styled.button`
  height: 3.6rem;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  gap: 0.6rem;

  font-weight: 500;
  line-height: 3.6rem;
  color: var(--color-blue);
  border-radius: 9rem;

  &:hover {
    background-color: var(--color-blue-dark);
  }

  &:active {
    background-color: var(--color-blue-dark-5);
  }

  ${(props) =>
    props.$bordered &&
    css`
      border: 1px solid rgba(255, 255, 255, 0.2);

      &:hover {
        border: 1px solid transparent;
      }
    `}
`;

function Button({ children }) {
  return (
    <StyledButton $bordered>
      <RiUserLine /> {children}
    </StyledButton>
  );
}

export default Button;