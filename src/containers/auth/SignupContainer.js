import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignupForm from '../../components/auth/SignupForm';
import { changeField, initializeForm, signup } from '../../modules/auth';

const SignupContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form, signupResult } = useSelector(({ auth }) => ({
    form: auth.signup,
    signupResult: auth.signupResult,
  }));
  const { nickname, email, password } = form;
  const { success, failure, message } = signupResult;

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
    dispatch(signup({ nickname, email, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('signup'));
    dispatch(initializeForm('signupResult'));
  }, [dispatch]);

  useEffect(() => {
    if (failure) {
      console.log('회원가입 오류');
      alert(message);
      dispatch(initializeForm('signupResult'));
      return;
    }
    if (success) {
      console.log('회원가입 성공');
      alert(message);
      history.push('/signin');
      dispatch(initializeForm('signupResult'));
    }
  }, [dispatch, history, success, failure, message]);

  return <SignupForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default withRouter(SignupContainer);
