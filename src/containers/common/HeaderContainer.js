import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { signout } from '../../modules/auth';
import * as profileAPI from '../../lib/api/profile';

const HeaderContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { nickname } = useSelector(({ auth }) => ({
    nickname: auth.user.nickname,
  }));
  const [credit, setCredit] = useState(0);
  const [id, setId] = useState(0);

  const onSignout = () => {
    localStorage.removeItem('user');
    dispatch(signout());
    history.push('/');
  };

  useEffect(() => {
    async function callAPI() {
      try {
        const response = await profileAPI.getCredit();
        setCredit(response.data.data.credit);
      } catch (e) {
        console.log('껌 불러오기 오류');
      }
      try {
        const response = await profileAPI.getUser();
        setId(response.data.data.id);
      } catch (e) {
        console.log('ID 불러오기 오류');
      }
    }
    callAPI();
  }, []);

  return (
    <Header nickname={nickname} id={id} credit={credit} onSignout={onSignout} />
  );
};

export default withRouter(HeaderContainer);
