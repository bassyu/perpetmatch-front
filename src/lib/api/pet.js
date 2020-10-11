import client from './client';

export const getBoard = ({ id }) => client.get(`/api/boards/${id}`);

export const getBoards = () => client.get('/api/boards');

export const searchBoards = ({
  zones,
  petTitles,
  petAges,
  wantCheckUp,
  wantLineAge,
  wantNeutered,
  credit,
}) =>
  client.post('/api/boards/profile/search', {
    zones,
    petTitles,
    petAges,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    credit,
  });
