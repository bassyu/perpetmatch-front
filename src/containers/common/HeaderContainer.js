import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { signout } from '../../modules/auth';

const HeaderContainer = () => {
  const { user } = useSelector(({ auth }) => ({ user: auth.auth.accessToken }));
  const dispatch = useDispatch();
  const onSignout = () => {
    localStorage.removeItem('auth');
    dispatch(signout());
  };
  return <Header user={user} onSignout={onSignout} />;
};

export default HeaderContainer;
