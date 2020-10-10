import React, { useEffect } from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/common/HeaderContainer';
import ListContainer from '../containers/pet/ListContainer';
import ListHeaderContainer from '../containers/pet/ListHeaderContainer';

const PetListBlock = styled.div`
  background-color: white;
`;

const PetList = () => {
  useEffect(() => {
    window.scrollTo({ top: 600 });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1);
  });
  return (
    <PetListBlock>
      <HeaderContainer />
      <ListHeaderContainer />
      <ListContainer />
    </PetListBlock>
  );
};

export default PetList;
