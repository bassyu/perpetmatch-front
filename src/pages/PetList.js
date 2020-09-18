import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/common/HeaderContainer';

const getDummy = (n = 30) => {
  const l = [];
  for (let i = 0; i < n; i++) {
    l.push(i);
  }
  return l.map((i) => <h1 key={i}>{i}</h1>);
};

const PetListBody = styled.div`
  margin-top: 5rem;
`;

const PetList = () => {
  return (
    <>
      <HeaderContainer />
      <PetListBody>
        <h1>PetList</h1>
        {getDummy()}
      </PetListBody>
    </>
  );
};

export default PetList;
