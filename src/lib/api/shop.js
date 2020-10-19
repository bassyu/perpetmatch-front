import client from './client';

export const getItem = ({ id }) => client.get(`/api/shop/details/${id}`);

export const getItems = ({ category }) => client.get(`/api/shop/${category}`);

export const getBests = () => client.get(`/api/shop/items/best`);

export const getNews = () => client.get(`/api/shop/items/new`);

export const getCartItems = () => client.get(`/api/order/bags`);

export const addCart = ({ id, count }) =>
  client.post(`/api/order/bags/${id}`, { count });

export const removeCart = ({ id }) =>
  client.delete(`/api/order/bags/details/${id}`);
