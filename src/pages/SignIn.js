import React from 'react';
import SigninTemplate from '../components/auth/SigninTemplate';
import SocialLogin from '../components/auth/SocialLogin';
import SigninContainer from '../components/auth/SigninContainer';

const Signin = () => {
  return (
    <>
      <SigninTemplate>
        <SocialLogin />
        <hr />
        <SigninContainer />
      </SigninTemplate>
    </>
  );
};

export default Signin;
