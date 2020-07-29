import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
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
          'https://www.perpetmatch.com/api/auth/signup',
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
    <div>
      <input name="nickname" value={nickname} onChange={onChange} />
      <input name="email" value={email} onChange={onChange} />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default SignUp;
