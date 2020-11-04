import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import FormTemplate from '../components/FormTemplate';
import palette from '../lib/styles/palette';

const Content = styled.div`
  color: ${palette.main};
  text-align: center;
  padding: 0 3rem;
  margin-bottom: 5rem;

  p {
    font-size: 1.25rem;
  }
`;

const StyledButton = styled(Button)`
  background: ${palette.gray[5]};
  margin-bottom: 1rem;
`;

const SignupComplete = () => {
  return (
    <FormTemplate>
      <Content>
        <h1>환영합니다!</h1>
        <br />
        <p>입양을 원하시면</p>
        <p>프로필을 작성해 주세요</p>
      </Content>
      <Link to="/profile/user-form">
        <StyledButton fullWidth>프로필 작성</StyledButton>
      </Link>
      <Link to="/pet/form">
        <Button fullWidth>파양하기</Button>
      </Link>
    </FormTemplate>
  );
};

export default SignupComplete;
