import client from './client';

export const getItem = ({ id }) => client.get(`/api/shop/details/${id}`);

export const getItems = ({ category }) => client.get(`/api/shop/${category}`);

export const getBests = () => client.get(`/api/shop/items/best`);

export const getNews = () => client.get(`/api/shop/items/new`);
