import React from 'react';
import styled from 'styled-components';
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  NAVER_AUTH_URL,
} from '../../constants/index';
import palette from '../../lib/styles/palette';

const socialMap = {
  google: {
    url: GOOGLE_AUTH_URL,
    color: '#dd4b39',
  },
  facebook: {
    url: FACEBOOK_AUTH_URL,
    color: '#3b5998',
  },
  naver: {
    url: NAVER_AUTH_URL,
    color: '#1ec800',
  },
};

const SocialLoginBlock = styled.div`
  margin-bottom: 2rem;
`;

const StyledButton = styled.button`
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  border: solid 0.5px ${palette.gray[1]};
  padding: 1rem;
  outline: none;
  width: 100%;
  background: ${(props) => socialMap[props.name]['color']};
  cursor: pointer;
  border-radius: 0.4rem;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const SocialLogin = () => {
  const onClick = (e) => {
    window.location.href = socialMap[e.target.name]['url'];
    //window.open(GOOGLE_AUTH_URL);
  };

  return (
    <SocialLoginBlock>
      <StyledButton name="google" onClick={onClick}>
        Sign in with Google
      </StyledButton>
      <StyledButton name="facebook" onClick={onClick}>
        Sign in with facebook
      </StyledButton>
      <StyledButton name="naver" onClick={onClick}>
        Sign in with NAVER
      </StyledButton>
    </SocialLoginBlock>
  );
};

export default SocialLogin;
