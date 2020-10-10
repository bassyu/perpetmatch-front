import React from 'react';
import { useSelector } from 'react-redux';
import List from '../../components/pet/List';

const ListContainer = () => {
  const { items } = useSelector(({ pet }) => ({ items: pet.items }));

  return <List items={items} />;
};

export default ListContainer;
