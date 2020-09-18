import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Input from '../common/Input';

const SignupFormBlock = styled.div`
  form {
    p {
      margin-bottom: 0.2rem;
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 4rem;
`;

const SignupForm = ({ form, onChange, onSubmit }) => {
  return (
    <>
      <SignupFormBlock>
        <form onSubmit={onSubmit}>
          <p>이름</p>
          <Input
            autoComplete="username"
            name="nickname"
            onChange={onChange}
            value={form.nickname}
          />
          <p>이메일</p>
          <Input
            autoComplete="email"
            name="email"
            onChange={onChange}
            value={form.email}
          />
          <p>비밀번호</p>
          <Input
            autoComplete="new-password"
            name="password"
            type="password"
            onChange={onChange}
            value={form.password}
          />
          <p>비밀번호 확인</p>
          <Input
            autoComplete="new-password"
            name="passwordConfirm"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
          <ButtonWithMarginTop fullWidth>다음</ButtonWithMarginTop>
        </form>
      </SignupFormBlock>
    </>
  );
};

export default SignupForm;
