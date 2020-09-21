import client from './client';

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
  client.post('api/post/pet/title', { petTitle });

export const writePetAge = ({ petAge }) =>
  client.post('api/post/pet/age', { petAge });

export const writeZone = ({ province }) =>
  client.post('api/post/profiles/zone', { province });
