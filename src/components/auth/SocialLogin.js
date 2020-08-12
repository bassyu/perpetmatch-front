import React from 'react';
import styled from 'styled-components';
import { GOOGLE_AUTH_URL } from '../../constants/index';
import palette from '../../lib/styles/palette';

const SocialLoginBlock = styled.div`
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  font-size: 0.8rem;
  border: solid 0.5px ${palette.gray[1]};
  padding: 1rem;
  outline: none;
  width: 100%;
  background: white;
  cursor: pointer;
  border-radius: 0.4rem;
`;

const SocialLogin = () => {
  const onClick = () => {
    window.location.href = GOOGLE_AUTH_URL;
    //window.open(GOOGLE_AUTH_URL);
  };

  return (
    <SocialLoginBlock>
      <StyledButton onClick={onClick}>Sign in with Google</StyledButton>
    </SocialLoginBlock>
  );
};

export default SocialLogin;
