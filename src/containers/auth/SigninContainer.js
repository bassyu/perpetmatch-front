import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SigninForm from '../../components/auth/SigninForm';
import client from '../../lib/api/client';
import { changeField, initializeForm, signin } from '../../modules/auth';
import { message } from 'antd';
import { getUser } from '../../modules/profile';

const SigninContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.signin,
    auth: auth.auth,
    authError: auth.authError,
  }));
  const { accessToken, tokenType } = auth;

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
      message.warning('아이디/비밀번호를 다시 확인해주세요', 1);
      dispatch(initializeForm('authError'));
      return;
    }
    if (accessToken) {
      client.defaults.headers['Authorization'] = `${tokenType} ${accessToken}`;
      dispatch(getUser());
      try {
        localStorage.setItem('auth', JSON.stringify(auth));
      } catch (e) {
        console.log('localStorage 오류');
      }
      history.push('/commu');
    }
  }, [dispatch, history, auth, accessToken, tokenType, authError]);

  return <SigninForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default withRouter(SigninContainer);
