import ChannelBanner from './ChannelBanner.jsx';
import ChannelHeader from './ChannelHeader.jsx';
import Tabs from '../../components/Tabs/Tabs.jsx';
import { RiFilmLine } from 'react-icons/ri';
import Error from '../../components/Error/Error.jsx';
import React from 'react';

const Channel = () => {
  return (
    <div>
      <ChannelBanner />
      <ChannelHeader />
      <Tabs />
      <Error
        icon={<RiFilmLine />}
        description="This channel doesn't have any content"
      />
    </div>
  );
};

export default Channel;
