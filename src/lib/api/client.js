import axios from 'axios';

// api server를 여러개 사용할 때 client를 따로 만들어주는 것이 좋음
const client = axios.create({
  baseURL: 'http://perpetapi.com:8080/',
});

export default client;
