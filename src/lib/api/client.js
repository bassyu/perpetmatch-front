import axios from 'axios';

// api server를 여러개 사용할 때 client를 따로 만들어주는 것이 좋음
const client = axios.create();

export default client;
