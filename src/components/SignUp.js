/*
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [message, setMessage] = useState('');
  const [signup, setSignup] = useState({
    nickname: '',
    email: '',
    password: '',
  });
  const { nickname, email, password } = signup;

  const onChange = (e) => {
    console.log('onChange');
    const nextSingup = {
      ...signup,
      [e.target.name]: e.target.value,
    };
    setSignup(nextSingup);
  };

  const onClick = () => {
    console.log('onClick');
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://3.34.246.39:8080/api/auth/signup',
          signup,
        );
        alert(response.data.message);
        console.log(response.data.message);
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

export default SignUp; */

import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [signup, setSignup] = useState({
    nickname: '',
    email: '',
    password: '',
  });
  const { nickname, email, password } = signup;

  const handleChange = (e) => {
    const nextSingup = {
      ...signup,
      [e.target.name]: e.target.value,
    };
    setSignup(nextSingup);
    console.log(e.target.value);
  };

  const onClick = () => {
    console.log(signup);
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8080/api/auth/signup',
          signup,
        );
        console.log(response.data.message);
        alert(response.data.message);
      } catch (e) {
        console.log(e.response);
        alert('try again!');
      }
    };
    fetchData();
  };
  return (
    <div>
      <input name="nickname" value={nickname} onChange={handleChange} />
      <input name="email" value={email} onChange={handleChange} />
      <input name="password" value={password} onChange={handleChange} />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default SignUp;
