import { message } from 'antd';
import React from 'react';
import styled from 'styled-components';
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
  NAVER_AUTH_URL,
} from '../../constants/index';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

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
  cursor: pointer;
  width: 100%;
  border: none;
  border-radius: 0.4rem;
  padding: 1rem;
  text-align: center;
  background: ${(props) => socialMap[props.name]['color']};
  opacity: 0.8;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  outline: none;

  .icon {
    float: left;
    font-size: 1.5rem;
  }
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
  const onClickDummy = (e) => {
    message.info({
      content: '구글 로그인을 이용해 주세요!',
      key: 'dummy',
      duration: 1,
    });
  };

  return (
    <SocialLoginBlock>
      <SocialButton name="google" onClick={onClick}>
        <FaGoogle className="icon" />
        Sign up with Google
      </SocialButton>
      <SocialButton name="facebook" onClick={onClickDummy}>
        <FaFacebook className="icon" />
        Sign up with facebook
      </SocialButton>
    </SocialLoginBlock>
  );
}

export default SocialLogin;
