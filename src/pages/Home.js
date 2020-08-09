import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';

const getDummy = (n = 30) => {
  const l = [];
  for (let i = 0; i < n; i++) {
    l.push(i);
  }
  return l.map((i) => <h1 key={i}>{i}</h1>);
};

const HomeBlock = styled.div`
  margin-top: 5rem;
`;

const Home = () => {
  return (
    <>
      <Header />
      <HomeBlock>
        <h1>Home</h1>
        {getDummy()}
      </HomeBlock>
    </>
  );
};

export default Home;
