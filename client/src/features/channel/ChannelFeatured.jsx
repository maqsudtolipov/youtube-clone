import React from 'react';
import Error from '../../components/Error/Error.jsx';
import { RiFilmLine } from 'react-icons/ri';

const ChannelFeatured = () => {
  const videos = [];

  return (
    <div>
      {videos.length ? (
        ''
      ) : (
        <Error
          icon={<RiFilmLine />}
          description="This channel doesn't have any content"
        />
      )}
    </div>
  );
};

export default ChannelFeatured;
