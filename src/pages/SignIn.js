import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import SigninForm from '../components/auth/SigninForm';
import SocialLogin from '../components/auth/SocialLogin';

const Signin = () => {
  return (
    <>
      <AuthTemplate>
        <SocialLogin />
        <hr />
        <SigninForm />
      </AuthTemplate>
    </>
  );
};

export default Signin;
