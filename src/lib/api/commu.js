import client from './client';

export const writeCard = ({ checked, image, likes, description }) =>
  client.post('/api/commu/boards', {
    checked,
    image,
    likes,
    description,
  });

export const getCards = () => client.get('/api/commu/boards');

export const writeComment = ({ id, text }) =>
  client.post(`/api/commu/boards/${id}/comments`, { text });

export const deleteComment = ({ id, commentId }) =>
  client.delete(`/api/commu/boards/${id}/comments/${commentId}`);
