import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import SignupForm from './SignupForm';

const SignupContainer = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.signup,
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
  };

  useEffect(() => {
    dispatch(initializeForm('signup'));
  }, [dispatch]);

  return <SignupForm form={form} onCahnge={onChange} onSubmit={onSubmit} />;
};

export default SignupContainer;
