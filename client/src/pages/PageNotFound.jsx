import React from 'react';
import { RiGhostLine, RiHome4Line } from 'react-icons/ri';
import Button from '../components/Button/Button.jsx';
import Error from '../components/Error/Error.jsx';

const PageNotFound = () => {
  return (
    <Error
      icon={<RiGhostLine />}
      message="404 | Page Not Found"
      description="This page isn't available. Sorry about that. Try searching for
          something else."
      button={
        <Button icon={<RiHome4Line />} bordered={true}>
          Go Home
        </Button>
      }
    />
  );
};

export default PageNotFound;
