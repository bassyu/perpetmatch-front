import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';

const HeaderContainer = () => {
  const { user } = useSelector(({ auth }) => ({ user: auth.auth }));
  return <Header user={user} />;
};

export default HeaderContainer;
