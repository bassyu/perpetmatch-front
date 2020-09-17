import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SigninForm from '../../components/auth/SigninForm';
import { changeField, initializeForm } from '../../modules/auth';

const SigninContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.signin,
  }));

  const onChange = (e) => {
    const { vlaue, name } = e.target;
    dispatch(
      changeField({
        form: 'signin',
        key: name,
        vlaue,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('signin'));
  }, [dispatch]);

  return <SigninForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default SigninContainer;
