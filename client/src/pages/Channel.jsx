import ChannelBanner from '../features/channel/ChannelBanner.jsx';
import ChannelHeader from '../features/channel/ChannelHeader.jsx';
import Tabs from '../components/Tabs/Tabs.jsx';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Channel = () => {
  return (
    <div>
      <ChannelBanner />
      <ChannelHeader />
      <Tabs />
      <Outlet />
    </div>
  );
};

export default Channel;
