import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
  padding: 0 6.4rem;
`;

const BannerImg = styled.img`
  width: 100%;
  border-radius: 1.6rem;
`;

const ChannelBanner = () => {
  return (
    <Banner>
      <BannerImg src="https://yt3.googleusercontent.com/uuU8zCdcY1Zt1zlh7UdYiOf7gFJ4Pj2U0RKYcr3vtZIYuo_3Hb7EQBzZ5VO-LTazGe-OSfpVFec=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" />
    </Banner>
  );
};

export default ChannelBanner;
