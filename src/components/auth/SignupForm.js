import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Input from '../common/Input';

const SignupFormBlock = styled.div``;

const Footer = styled.div`
  margin-top: 1rem;
  text-align: center;
  a {
    font-size: 0.8rem;
    color: black;
    &:hover {
      color: ${palette.gray[1]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const SignupForm = ({ form, onChange, onSubmit }) => {
  return (
    <>
      <SignupFormBlock>
        <form onSubmit={onSubmit}>
          <Input
            autoComplete="username"
            name="nickname"
            onChange={onChange}
            value={form.nickname}
          />
          <Input
            autoComplete="email"
            name="email"
            onChange={onChange}
            value={form.email}
          />
          <Input
            autoComplete="new-password"
            name="password"
            type="password"
            onChange={onChange}
            value={form.password}
          />
          <Input
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
          <ButtonWithMarginTop fullWidth>로그인</ButtonWithMarginTop>
        </form>
        <Footer>
          <Link to="/signup">회원가입</Link> |
          <Link to="/find"> 아이디/비밀번호 찾기</Link>
        </Footer>
      </SignupFormBlock>
    </>
  );
};

export default SignupForm;
