import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Input from '../common/Input';

const SigninFormBlock = styled.div`
  margin-top: 1rem;
`;

const Footer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;

  a {
    font-size: 0.8rem;
    color: black;

    &:hover {
      color: ${palette.gray[6]};
    }
  }
`;

const InputWithMarginTop = styled(Input)`
  margin-top: 1rem;
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

function SigninForm({ form, onChange, onSubmit }) {
  return (
    <>
      <SigninFormBlock>
        <form onSubmit={onSubmit}>
          <Input
            autoComplete="username"
            name="usernameOrEmail"
            placeholder="닉네임 혹은 이메일"
            onChange={onChange}
            value={form.usernameOrEmail}
          />
          <InputWithMarginTop
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={form.password}
          />
          <ButtonWithMarginTop fullWidth>로그인</ButtonWithMarginTop>
        </form>
        <Footer>
          <Link to="/signup">회원가입</Link> |
          <Link to="/signin"> 아이디/비밀번호 찾기</Link>
        </Footer>
      </SigninFormBlock>
    </>
  );
}

export default SigninForm;
