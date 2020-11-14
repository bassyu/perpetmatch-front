import React from 'react';
import styled from 'styled-components';
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  NAVER_AUTH_URL,
} from '../../constants/index';

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
  margin-bottom: 1rem;
`;

const SocialButton = styled.button`
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
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

function SocialLogin() {
  const onClick = (e) => {
    window.location.href = GOOGLE_AUTH_URL;
    //window.open(GOOGLE_AUTH_URL);
  };

  return (
    <SocialLoginBlock>
      <SocialButton name="google" onClick={onClick}>
        Sign in with Google
      </SocialButton>
      <SocialButton name="facebook" onClick={onClick}>
        Sign in with facebook
      </SocialButton>
      <SocialButton name="naver" onClick={onClick}>
        Sign in with NAVER
      </SocialButton>
    </SocialLoginBlock>
  );
}

export default SocialLogin;
