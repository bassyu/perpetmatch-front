import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import SigninForm from '../components/auth/SigninForm';

const SignIn = () => {
  return (
    <>
      <AuthTemplate>
        <SigninForm />
      </AuthTemplate>
    </>
  );
};

export default SignIn;
