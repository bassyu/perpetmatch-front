import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { signout } from '../../modules/auth';

const HeaderContainer = ({ history }) => {
  const { nickname } = useSelector(({ auth }) => ({
    nickname: auth.user.nickname,
  }));
  const dispatch = useDispatch();
  const onSignout = () => {
    localStorage.removeItem('user');
    dispatch(signout());
    history.push('/');
  };
  return <Header nickname={nickname} onSignout={onSignout} />;
};

export default withRouter(HeaderContainer);
