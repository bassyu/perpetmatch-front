import client from './client';

export const getBoard = ({ id }) => client.get(`/api/boards/${id}`);

export const getBoards = () => client.get('/api/boards');

export const searchBoards = ({
  page,
  zones,
  petTitles,
  petAges,
  wantCheckUp,
  wantLineAge,
  wantNeutered,
  expectedFeeForMonth,
}) =>
  client.post(`/api/boards/profile/search?page=${page}`, {
    zones,
    petTitles,
    petAges,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    expectedFeeForMonth,
  });

export const writeBoard = ({
  title,
  credit,
  zone,
  gender,
  year,
  month,
  petTitle,
  checkUpImage,
  lineAgeImage,
  hasNeutered,
  description,
  boardImage1,
  boardImage2,
  boardImage3,
}) =>
  client.post(`/api/boards`, {
    title,
    credit,
    zone,
    gender,
    year,
    month,
    petTitle,
    checkUpImage,
    lineAgeImage,
    hasNeutered,
    description,
    boardImage1,
    boardImage2,
    boardImage3,
  });

export const applyBoard = ({ id }) => client.post(`/api/boards/${id}/apply`);

export const getApplyed = ({ id }) =>
  client.get(`/api/boards/${id}/applied_me`);

export const getApplyList = ({ id }) => client.get(`/api/boards/${id}/manager`);

export const acceptBoard = ({ id, nickname }) =>
  client.post(`/api/boards/${id}/accept`, { nickname });
