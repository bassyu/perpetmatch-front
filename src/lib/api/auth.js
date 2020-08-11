import client from './client';

export const signin = ({ usernameOrEmail, password }) =>
  client.post('/api/auth/signin', { usernameOrEmail, password });

export const signup = ({ nickname, email, password }) =>
  client.post('/api/auth/signup', { nickname, email, password });
