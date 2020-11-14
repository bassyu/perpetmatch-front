import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import FormTemplate from '../components/FormTemplate';
import palette from '../lib/styles/palette';

const SignupCompleteBlock = styled.div`
  .content {
    color: ${palette.main};
    text-align: center;
    padding: 0 3rem;
    margin-bottom: 5rem;

    p {
      font-size: 1.25rem;
    }
  }
  button {
    margin-top: 1rem;
  }
`;

function SignupComplete() {
  return (
    <FormTemplate>
      <SignupCompleteBlock>
        <div className="content">
          <h1>환영합니다!</h1>
          <br />
          <p>입양을 원하시면</p>
          <p>프로필을 작성해 주세요</p>
        </div>
        <Link className="link" to="/profile/user-form">
          <Button fullWidth>프로필 작성</Button>
        </Link>
        <Link className="link" to="/pet/form">
          <Button fullWidth background={palette.hover}>
            파양하기
          </Button>
        </Link>
        <Link className="link" to="/commu">
          <Button fullWidth background={palette.gray[5]}>
            이미 작성했어요
          </Button>
        </Link>
      </SignupCompleteBlock>
    </FormTemplate>
  );
}

export default SignupComplete;
