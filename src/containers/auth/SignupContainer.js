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
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signup',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { nickname, email, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      // TODO : error processing
      return;
    }
    dispatch(signup({ nickname, email, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('signup'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('회원가입 오류');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      return;
    }
  }, [auth, authError]);

  return <SignupForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default SignupContainer;
