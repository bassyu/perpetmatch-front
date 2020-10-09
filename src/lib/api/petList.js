import client from './client';

export const searchPetList = ({
  zones,
  petTitles,
  petAges,
  wantCheckUp,
  wantLineAge,
  wantNeutered,
  credit,
}) => (
  console.log({
    zones,
    petTitles,
    petAges,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    credit,
  }),
  console.log(client.defaults),
  client.post('/api/boards/profile/search', {
    zones,
    petTitles,
    petAges,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    credit,
  })
);
