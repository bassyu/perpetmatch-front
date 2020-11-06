import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { signout } from '../../modules/auth';
import * as profileAPI from '../../lib/api/profile';
import client from '../../lib/api/client';

const HeaderContainer = ({ history }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    id: 1,
    nickname: '',
    credit: 0,
  });

  const onSignout = () => {
    localStorage.removeItem('auth');
    dispatch(signout());
    setUser({});
    client.defaults.headers['Authorization'] = '';
    history.push('/commu');
  };

  useEffect(() => {
    async function callAPI() {
      try {
        const response = await profileAPI.getUser();
        setUser(response.data.data);
      } catch (e) {
        console.log('불러오기 오류');
      }
    }
    if (client.defaults.headers.Authorization) {
      callAPI();
    }
  }, []);

  return <Header user={user} onSignout={onSignout} />;
};

export default withRouter(HeaderContainer);
