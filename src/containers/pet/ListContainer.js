import React from 'react';
import { useSelector } from 'react-redux';
import List from '../../components/pet/List';

const ListContainer = () => {
  const { items } = useSelector(({ petList }) => ({ items: petList.items }));

  return <List items={items} />;
};

export default ListContainer;
