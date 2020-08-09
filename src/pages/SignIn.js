//setipAxiosIntercepters;

import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SigninBlock = styled.div`
  margin-top: 2rem;
`;

const SignIn = () => {
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
      <SigninBlock>
        <h1>회원가입</h1>
        <div>이름</div>
        <input name="nickname" value={nickname} onChange={onChange} />
        <br />
        <div>아이디</div>
        <input name="email" value={email} onChange={onChange} />
        <br />
        <div>비밀번호</div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <br />
        <button onClick={onClick}>확인</button>
      </SigninBlock>
    </>
  );
};

export default SignIn;
