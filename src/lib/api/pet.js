import client from './client';

export const getBoard = ({ id }) => client.get(`/api/boards/${id}`);

export const searchPetList = ({
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
