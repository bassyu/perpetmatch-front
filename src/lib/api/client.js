import axios from 'axios';

const client = axios.create({
  baseURL: 'https://perpetapi.com/',
});

export default client;
