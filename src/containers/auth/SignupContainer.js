import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignupForm from '../../components/auth/SignupForm';
import client from '../../lib/api/client';
import {
  changeField,
  initializeForm,
  signin,
  signup,
} from '../../modules/auth';

const SignupContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form, signupResult, auth, authError } = useSelector(({ auth }) => ({
    form: auth.signup,
    signupResult: auth.signupResult,
    auth: auth.auth,
    authError: auth.authError,
  }));
  const { nickname, email, password } = form;
  const { success, failure, message } = signupResult;
  const { accessToken, tokenType } = auth;

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
      alert(message);
      dispatch(initializeForm('signupResult'));
      return;
    }
    if (success) {
      alert(message);
      dispatch(signin({ usernameOrEmail: email, password })); // 회원가입 후 자동 로그인
      dispatch(initializeForm('signupResult'));
    }
  }, [dispatch, history, email, password, success, failure, message]);

  useEffect(() => {
    if (authError) {
      console.log('로그인 오류');
      console.log(authError);
      return;
    }
    if (accessToken) {
      console.log('로그인 성공');
      client.defaults.headers['Authorization'] = `${tokenType} ${accessToken}`;
      history.push('/signup/complete');
      try {
        localStorage.setItem('auth', JSON.stringify(auth));
      } catch (e) {
        console.log('localStorage 오류');
      }
    }
  }, [history, auth, accessToken, tokenType, authError]);

  return <SignupForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default withRouter(SignupContainer);
