import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SigninForm from '../../components/auth/SigninForm';
import client from '../../lib/api/client';
import { changeField, initializeForm, signin } from '../../modules/auth';

const SigninContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form, user, authError } = useSelector(({ auth }) => ({
    form: auth.signin,
    user: auth.user,
    authError: auth.authError,
  }));
  const { accessToken, tokenType } = user;

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signin',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { usernameOrEmail, password } = form;
    dispatch(signin({ usernameOrEmail, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('signin'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      alert('아이디/비밀번호를 다시 확인해주세요');
      dispatch(initializeForm('authError'));
      return;
    }
    if (accessToken) {
      client.defaults.headers['Authorization'] = `${tokenType} ${accessToken}`;
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage 오류');
      }
    }
  }, [dispatch, history, user, accessToken, tokenType, authError]);

  return <SigninForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default withRouter(SigninContainer);
