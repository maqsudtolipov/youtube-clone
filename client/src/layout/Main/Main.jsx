import React from 'react';
import Tabs from '../../components/Tabs.jsx';
import styled from 'styled-components';
import Content from '../../components/Content/Content.jsx';

const StyledMain = styled.main`
  height: calc(100vh - 5.6rem);
  margin-left: 24rem;
  margin-top: 5.6rem;

  // Temp
  padding: 0 2.4rem;

  overflow-y: scroll;

  * .hidden {
    margin-left: 0;
  }

  * .folded {
    margin-left: 7.2rem;
  }

  .videos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1.4rem;
    row-gap: 4rem;
  }
`;

const Main = ({ isHidden, isFolded }) => {
  return (
    <StyledMain
      className={`${isHidden ? 'hidden' : ''} ${isFolded ? 'folded' : ''}`}
    >
      <Tabs />
      <div className="videos">
        {[...Array(9).keys()].map((el) => (
          <Content
            key={Math.random()}
            img="https://source.unsplash.com/random/1280×720/?nature-path"
            title="My latest hiking adventure!"
            avatar="https://source.unsplash.com/random/64x64/?guy"
            username="Aaron Reid"
            views="21k"
            createdAt="42 minutes ago"
          />
        ))}
      </div>
    </StyledMain>
  );
};

export default Main;
