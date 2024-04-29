import React from 'react';
import Tabs from '../components/Tabs.jsx';
import Content from '../components/Content/Content.jsx';

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
