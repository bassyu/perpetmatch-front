import React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';

const ShopCheckoutBlcok = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  padding-top: 7rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  background: ${palette.gray[2]};
`;

const ShopCheckout = () => {
  return (
    <ShopCheckoutBlcok>
      <HeaderContainer />
      <div></div>
    </ShopCheckoutBlcok>
  );
};

export default ShopCheckout;
