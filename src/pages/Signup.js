import React from 'react';
import SignupContainer from '../containers/auth/SignupContainer';
import FormTemplate from '../components/FormTemplate';

const Signup = () => {
  return (
    <>
      <FormTemplate>
        <SignupContainer />
      </FormTemplate>
    </>
  );
};

export default Signup;
