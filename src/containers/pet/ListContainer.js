import React from 'react';
import { useSelector } from 'react-redux';
import List from '../../components/pet/List';

const ListContainer = () => {
  const { boards } = useSelector(({ pet }) => ({ boards: pet.boards }));

  return <List boards={boards} />;
};

export default ListContainer;
