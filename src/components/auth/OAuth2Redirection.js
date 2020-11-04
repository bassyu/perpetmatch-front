import React from 'react';
import queryString from 'query-string';
import client from '../../lib/api/client';
import { withRouter } from 'react-router-dom';

const OAuth2Redirection = ({ location, history }) => {
  const tokenType = 'Bearer';
  const accessToken = queryString.parse(location.search).token;

  if (accessToken) {
    client.defaults.headers['Authorization'] = `${tokenType} ${accessToken}`;
    history.push('/signup/complete');
    try {
      localStorage.setItem('auth', JSON.stringify({ tokenType, accessToken }));
    } catch (e) {
      console.log('localStorage 오류');
    }
  }
  return <h1>OAuth2Redirection</h1>;
};

export default withRouter(OAuth2Redirection);
