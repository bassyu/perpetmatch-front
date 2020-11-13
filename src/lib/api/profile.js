import client from './client';

export const getUser = () => client.get('/api/profiles');

export const writeUser = ({
  age,
  occupation,
  location,
  houseType,
  experience,
  liveAlone,
  hasPet,
  phoneNumber,
  description,
  wantCheckUp,
  wantLineAge,
  wantNeutered,
  zones,
  petTitles,
  petAges,
}) =>
  client.post('/api/profiles', {
    age,
    occupation,
    location,
    houseType,
    experience,
    liveAlone,
    hasPet,
    phoneNumber,
    description,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    zones,
    petTitles,
    petAges,
  });

export const getCredit = () => client.get('/api/profiles/credit');

export const getUserBreif = ({ id }) =>
  client.get(`/api/profiles/mypage/${id}`);

export const getUserOrders = ({ id }) =>
  client.get(`/api/profiles/mypage/orders/${id}`);

export const getUserBoards = () => client.get(`/api/profiles/mypage/board`);
