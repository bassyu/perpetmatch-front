import { message } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

function PrivateRoute(props) {
  const { path, redirectTo, component, exact } = props;
  const auth = useSelector(({ auth }) => auth.auth);

  useEffect(() => {
    if (!auth.accessToken) {
      message.info('로그인이 필요한 서비스 입니다.', 1);
    }
  }, []);

  return (
    <Route
      exact={exact}
      path={path}
      render={auth.accessToken ? component : redirectTo}
    />
  );
}

export default PrivateRoute;
