import React from 'react';
import Button from '../../components/Button/Button.jsx';
import styled from 'styled-components';
import Modal from '../../components/Modal/Modal.jsx';
import InfoModal from './InfoModal.jsx';

const Header = styled.div`
  padding: 1.6rem 6.4rem 0 6.4rem;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.6rem;
`;

const HeaderContent = styled.div`
  margin-top: 0.8rem;
  color: #aaa;

  h1 {
    font-size: 3.6rem;
    font-weight: 900;
    color: var(--color-white);
  }
`;

const HeaderActions = styled.div`
  margin-top: 1.2rem;
  display: flex;
  gap: 1.2rem;
`;

// Avatar
const Avatar = styled.div``;

const AvatarImg = styled.img`
  border-radius: 50rem;
`;

const ChannelHeader = () => {
  return (
    <Header>
      <Avatar>
        <AvatarImg src="https://yt3.googleusercontent.com/5-qKr6sM5U7AIdBn9VsifcCr2or3QExvmu8tbfLNJiv2Ou-SDoZ_iorPgUvb6zBs2y3E88a2=s160-c-k-c0x00ffffff-no-rj" />
      </Avatar>
      <HeaderContent>
        <div>
          <h1>Camel Case</h1>
          <div>
            <span>@camelCaseDev</span>•<span>1.23K subscribers</span>•
            <span>13 videos</span>
          </div>
        </div>
        <HeaderActions>
          <Button color="white" bordered={true}>
            Subscribe
          </Button>
          <InfoModal />
        </HeaderActions>
      </HeaderContent>
    </Header>
  );
};

export default ChannelHeader;
