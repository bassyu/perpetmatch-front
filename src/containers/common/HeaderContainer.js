import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { signout } from '../../modules/auth';
import client from '../../lib/api/client';
import { initUser } from '../../modules/profile';

const HeaderContainer = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector(({ profile }) => profile.user);

  const onSignout = () => {
    localStorage.removeItem('auth');
    dispatch(signout());
    dispatch(initUser());
    client.defaults.headers['Authorization'] = '';
    history.push('/commu');
  };

  return <Header user={user} onSignout={onSignout} />;
};

export default withRouter(HeaderContainer);
