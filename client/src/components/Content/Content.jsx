import styled from 'styled-components';

const StyledContent = styled.div`
  cursor: pointer;
`;

const Thumbnail = styled.div`
  // TODO: should be 1.2 but there is browser bug
  margin-bottom: 0.8rem;

  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 1.2rem;
  }

  &:hover img {
    border-radius: 0;
  }
`;

const Details = styled.div`
  display: flex;
  gap: 1.2rem;
  color: var(--color-text-secondary);
`;

const Avatar = styled.img`
  height: 3.4rem;
  width: 3.4rem;
  border-radius: 50rem;
`;

const Title = styled.h3`
  margin-bottom: 0.2rem;
  font-size: 1.6rem;
  color: var(--color-white);
`;

const VideoInfo = styled.div`
  display: flex;
  gap: 4px;
`;

const Content = ({ img, title, avatar, username, views, createdAt }) => {
  return (
    <StyledContent>
      <Thumbnail>
        <img src={img} alt="Thumbnail" />
      </Thumbnail>

      <Details>
        <Avatar src={avatar} alt="User avatar" />
        <div>
          <Title>{title}</Title>
          <p>{username}</p>
          <VideoInfo>
            <span>{views} view</span>
            <span>•</span>
            <span>{createdAt}</span>
          </VideoInfo>
        </div>
      </Details>
    </StyledContent>
  );
};

export default Content;
