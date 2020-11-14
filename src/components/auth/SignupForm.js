import React from 'react';
import styled from 'styled-components';
import Comment from '../Comment';
import Button from '../common/Button';
import Input from '../common/Input';

const SignupFormBlock = styled.div`
  .spacer {
    height: 3rem;
  }
`;

function SignupForm({ form, onChange, onSubmit, loading }) {
  const { nickname, email, password, passwordConfirm } = form;
  return (
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
          placeholder="비밀번호 (영문, 숫자, 특수문자 8-20자)"
          onChange={onChange}
          value={password}
        />
        <p>비밀번호 확인</p>
        <Input
          autoComplete="new-password"
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호 (영문, 숫자, 특수문자 8-20자)"
          onChange={onChange}
          value={passwordConfirm}
        />
        {password && passwordConfirm && (
          <Comment
            style={{ color: password === passwordConfirm ? 'green' : 'red' }}
          >
            &#8251;
            {password === passwordConfirm
              ? ' 비밀번호가 일치합니다.'
              : ' 비밀번호가 일치하지 않습니다.'}
          </Comment>
        )}
        <div className="spacer" />
        <Button fullWidth loading={loading['auth/SIGNUP']}>
          다음
        </Button>
      </form>
    </SignupFormBlock>
  );
}

export default SignupForm;
