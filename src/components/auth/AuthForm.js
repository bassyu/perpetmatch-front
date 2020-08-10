import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: solid 0.5px ${palette.gray[1]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border: solid 0.5px ${palette.main[0]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  a {
    color: black;
    &:hover {
      color: ${palette.gray[1]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const AuthForm = () => {
  const [signup, setSignup] = useState({
    nickname: '',
    email: '',
    password: '',
  });
  const { nickname, email, password } = signup;

  const onChange = (e) => {
    const nextSingup = {
      ...signup,
      [e.target.name]: e.target.value,
    };
    setSignup(nextSingup);
  };
  const onClick = () => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://3.34.246.39:8080/api/auth/signup',
          signup,
        );
        alert(response.data.message);
        // 라우팅
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  };

  return (
    <>
      <AuthFormBlock>
        <form>
          <StyledInput
            autoComplete="username"
            name="usernameOrEmail"
            placeholder="닉네임 혹은 이메일"
          />
          <StyledInput
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
          />
          <ButtonWithMarginTop fullWidth>로그인</ButtonWithMarginTop>
        </form>
        <Footer>
          <Link to="signup">회원가입</Link>
        </Footer>
      </AuthFormBlock>
    </>
  );
};

export default AuthForm;
