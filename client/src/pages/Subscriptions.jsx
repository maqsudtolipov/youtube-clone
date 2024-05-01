import Content from '../components/Content/Content.jsx';
import styled from 'styled-components';
import { Contents } from '../components/Contents.jsx';
import Button from '../components/Button/Button.jsx';
import CircleButton from '../components/Button/CircleButton.jsx';
import { RiLayoutGridFill, RiListUnordered } from 'react-icons/ri';

const Header = styled.div`
  padding: 1.4rem 0;

  display: flex;

  .spacer {
    flex: 1;
  }
`;

const Subscriptions = () => {
  return (
    <Contents>
      <Header>
        <h2>Latest</h2>
        <div className="spacer"></div>
        <Button>Manage</Button>
        <CircleButton icon={<RiLayoutGridFill />} />
        <CircleButton icon={<RiListUnordered />} />
      </Header>

      <div className="videos">
        {[...Array(9).keys()].map((el) => (
          <Content
            key={Math.random()}
            img="https://source.unsplash.com/random/1280×720/?garden"
            title="Welcome to my garden"
            avatar="https://source.unsplash.com/random/64x64/?guy"
            username="Jorge Little"
            views="831"
            createdAt="12 minutes ago"
          />
        ))}
      </div>
    </Contents>
  );
};

export default Subscriptions;
