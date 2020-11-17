import * as React from 'react';
import queryString from 'query-string';
import client from '../../lib/api/client';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../../modules/profile';
import FormTemplate from '../FormTemplate';
import { tempSetAuth } from '../../modules/auth';

interface OAuth2RedirectionProps extends RouteComponentProps<any> {}

function OAuth2Redirection({ location, history }: OAuth2RedirectionProps) {
  const dispatch = useDispatch();
  const tokenType: string = 'Bearer';
  const accessToken: string | string[] | null = queryString.parse(
    location.search,
  ).token;

  if (accessToken) {
    try {
      localStorage.setItem('auth', JSON.stringify({ tokenType, accessToken }));
    } catch (e) {
      console.log('localStorage 오류');
    }
    client.defaults.headers['Authorization'] = `${tokenType} ${accessToken}`;
    dispatch(tempSetAuth({ accessToken, tokenType }));
    dispatch(getUser());
    history.push('/signup/complete');
  }
  return (
    <FormTemplate title="OAuth2">
      해당 페이지가 계속 보인다면 담당자에게 문의 주세요.
    </FormTemplate>
  );
}

export default withRouter(OAuth2Redirection);
