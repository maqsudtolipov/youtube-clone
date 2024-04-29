import { RiCircleFill, RiGamepadLine } from 'react-icons/ri';
import styled, { css } from 'styled-components';
import { PiBroadcast } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

const StyledSidebarLink = styled(NavLink)`
  height: 4rem;
  padding: 0 1.2rem;

  display: flex;
  align-items: center;
  gap: 2.4rem;

  border-radius: 1rem;

  // TEMP
  cursor: pointer;

  img {
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 50rem;
  }

  span {
    flex: 1;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${({ $active }) =>
    $active === true &&
    css`
      background-color: rgba(255, 255, 255, 0.1);

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    `}

  &.active {
    background-color: rgba(255, 255, 255, 0.1);

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const BroadcastIcon = styled(PiBroadcast)`
  color: var(--color-brand);
`;

const NewIcon = styled(RiCircleFill)`
  color: var(--color-blue);
  scale: 0.3;
`;

function SidebarLink({
  to,
  active = false,
  icon,
  img,
  title = '',
  status = '',
}) {
  return (
    <StyledSidebarLink to={to} $active={active}>
      {icon || img || 'Please give icon or img'}

      <span>{title || 'Please give a title'}</span>

      {status === 'live' && <BroadcastIcon />}
      {status === 'new' && <NewIcon />}
    </StyledSidebarLink>
  );
}

export default SidebarLink;
