import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignupForm from '../../components/auth/SignupForm';
import { changeField, initializeForm, signup } from '../../modules/auth';

const SignupContainer = ({ history }) => {
  const [confirm, setConfirm] = useState(false);
  const dispatch = useDispatch();
  const { form, signupResult, authError } = useSelector(({ auth }) => ({
    form: auth.signup,
    signupResult: auth.signupResult,
    authError: auth.authError,
  }));
  const { nickname, email, password, passwordConfirm } = form;
  const { success, message } = signupResult;

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
    setConfirm(password === passwordConfirm);
  }, [password, passwordConfirm]);

  useEffect(() => {
    dispatch(initializeForm('signup'));
    dispatch(initializeForm('signupResult'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
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
  }, [dispatch, history, success, message, authError]);

  return (
    <SignupForm
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      confirm={confirm}
    />
  );
};

export default withRouter(SignupContainer);
