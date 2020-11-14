import React from 'react';
import SignupContainer from '../containers/auth/SignupContainer';
import FormTemplate from '../components/FormTemplate';

function Signup() {
  return (
    <>
      <FormTemplate title="회원가입">
        <SignupContainer />
      </FormTemplate>
    </>
  );
}

export default Signup;
