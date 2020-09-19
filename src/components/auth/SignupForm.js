import React from 'react';
import styled from 'styled-components';
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
  margin-top: 3rem;
`;

const Message = styled.div`
  color: ${({ confirm }) => (confirm ? 'green' : 'red')};
  font-size: 0.5rem;
  margin-top: 0.5rem;
  padding-left: 0.2rem;
`;

const SignupForm = ({ form, onChange, onSubmit, confirm }) => {
  const { nickname, email, password, passwordConfirm } = form;
  return (
    <>
      <SignupFormBlock>
        <form onSubmit={onSubmit}>
          <p>이름</p>
          <Input
            autoComplete="username"
            name="nickname"
            onChange={onChange}
            value={nickname}
          />
          <p>이메일</p>
          <Input
            autoComplete="email"
            name="email"
            onChange={onChange}
            value={email}
          />
          <p>비밀번호</p>
          <Input
            autoComplete="new-password"
            name="password"
            type="password"
            onChange={onChange}
            value={password}
          />
          <p>비밀번호 확인</p>
          <Input
            autoComplete="new-password"
            name="passwordConfirm"
            type="password"
            onChange={onChange}
            value={passwordConfirm}
          />
          {password && passwordConfirm && (
            <Message confirm={confirm}>
              &#8251;
              {confirm
                ? ' 비밀번호가 일치합니다.'
                : ' 비밀번호가 일치하지 않습니다.'}
            </Message>
          )}
          <ButtonWithMarginTop fullWidth>다음</ButtonWithMarginTop>
        </form>
      </SignupFormBlock>
    </>
  );
};

export default SignupForm;
