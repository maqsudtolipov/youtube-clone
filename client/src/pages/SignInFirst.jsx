import Button from '../components/Button/Button.jsx';
import { RiArchiveStackLine, RiUserLine } from 'react-icons/ri';
import Error from '../components/Error/Error.jsx';
import React from 'react';

const SignInFirst = ({ icon, title, description }) => {
  return (
    <Error
      icon={<RiArchiveStackLine />}
      message="Don't miss new videos"
      description="Sign in to see updates from your favourite YouTube channels"
      button={
        <Button icon={<RiUserLine />} bordered={true}>
          Sign in
        </Button>
      }
    />
  );
};

export default SignInFirst;
