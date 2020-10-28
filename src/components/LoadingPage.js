import React from 'react';
import styled from 'styled-components';

const LoadingPageBlock = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;

  background: rgba(32, 64, 48, 0.5);
`;

const LoadingPage = () => {
  return <LoadingPageBlock></LoadingPageBlock>;
};

export default LoadingPage;
