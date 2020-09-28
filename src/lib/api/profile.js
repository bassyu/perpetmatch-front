import client from './client';

export const getUser = () => client.get('/api/profiles');

export const writeUser = ({
  age,
  occupation,
  location,
  houseType,
  experience,
  liveAlone,
  howManyPets,
  phoneNumber,
  description,
}) =>
  client.post('/api/profiles', {
    age,
    occupation,
    location,
    houseType,
    experience,
    liveAlone,
    howManyPets,
    phoneNumber,
    description,
  });

export const writePetTitle = ({ petTitle }) =>
  client.post('/api/profiles/pet/title', { petTitle });

export const deletePetTitle = ({ petTitle }) =>
  client.delete('/api/profiles/pet/title', { petTitle });

export const writePetAge = ({ petAge }) =>
  client.post('api/profiles/pet/age', { petAge });

export const deletePetAge = ({ petAge }) =>
  client.delete('api/profiles/pet/age', { petAge });

export const writeZone = ({ province }) =>
  client.post('api/profiles/zone', { province });

export const deleteZone = ({ province }) =>
  client.delete('api/profiles/zone', { province });
