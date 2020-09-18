import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SigninForm from '../../components/auth/SigninForm';
import { changeField, initializeForm, signin } from '../../modules/auth';

const SigninContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.signin,
    auth: auth.auth,
    authError: auth.authError,
  }));

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
    const { usernameOremail, password } = form;
    dispatch(signin({ usernameOremail, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('signin'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('로그인 오류');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      history.push('/');
    }
  }, [history, auth, authError]);

  return <SigninForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default withRouter(SigninContainer);
