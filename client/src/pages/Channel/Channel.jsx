import { useParams } from 'react-router-dom';
import ChannelBanner from './ChannelBanner.jsx';
import ChannelHeader from './ChannelHeader.jsx';

// Header

const Channel = () => {
  return (
    <div>
      <ChannelBanner />
      <ChannelHeader />
    </div>
  );
};

export default Channel;
