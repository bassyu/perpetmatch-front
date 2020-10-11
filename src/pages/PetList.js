import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/common/HeaderContainer';
import ListContainer from '../containers/pet/ListContainer';
import ListHeaderContainer from '../containers/pet/ListHeaderContainer';

const PetListBlock = styled.div`
  background-color: white;
`;

const PetList = () => {
  return (
    <PetListBlock>
      <HeaderContainer />
      <ListHeaderContainer />
      <ListContainer />
    </PetListBlock>
  );
};

export default PetList;
