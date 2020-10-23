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

export const applyBoard = ({ id }) => client.post(`/api/boards/${id}/apply`);
