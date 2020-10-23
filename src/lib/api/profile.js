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

export const addPetTitle = ({ petTitle }) =>
  client.post('/api/profiles/pet/title', { petTitle });

export const removePetTitle = ({ petTitle }) =>
  client.delete('/api/profiles/pet/title', { petTitle });

export const addPetAge = ({ petAge }) =>
  client.post('/api/profiles/pet/age', { petAge });

export const removePetAge = ({ petAge }) =>
  client.delete('/api/profiles/pet/age', { petAge });

export const addZone = ({ province }) =>
  client.post('/api/profiles/zone', { province });

export const removeZone = ({ province }) =>
  client.delete('/api/profiles/zone', { province });
