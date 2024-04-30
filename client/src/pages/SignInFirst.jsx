import styled from 'styled-components';
import Button from '../components/Button.jsx';
import { RiArchiveStackLine, RiUserLine } from 'react-icons/ri';

const StyledSignInFirst = styled.div`
  padding-top: 14rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  .icon {
    font-size: 12rem;
  }

  h3 {
    margin-bottom: 1.6rem;
    font-size: 2.4rem;
    font-weight: 400;
  }
`;

const Message = styled.div`
  padding: 2.4rem 0;
`;

const SignInFirst = ({ icon, title, description }) => {
  return (
    <StyledSignInFirst>
      <RiArchiveStackLine className="icon" />

      <Message className="message">
        <h3>Don't miss new videos</h3>
        <p>Sign in to see updates from your favourite YouTube channels</p>
      </Message>

      <Button icon={<RiUserLine />} bordered={true}>
        Sign in
      </Button>
    </StyledSignInFirst>
  );
};

export default SignInFirst;
