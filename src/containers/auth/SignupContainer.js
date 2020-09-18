import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignupForm from '../../components/auth/SignupForm';
import { changeField, initializeForm, signup } from '../../modules/auth';

const SignupContainer = () => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.signup,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const onChange = (e) => {
    const { vlaue, name } = e.target;
    dispatch(
      changeField({
        form: 'signup',
        key: name,
        vlaue,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { nickname, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      // TODO : error processing
      return;
    }
    dispatch(signup({ nickname, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('signup'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('error');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('Sign Up Success');
      console.log(auth);
      return;
    }
  }, [auth, authError]);

  return <SignupForm form={form} onCahnge={onChange} onSubmit={onSubmit} />;
};

export default SignupContainer;
