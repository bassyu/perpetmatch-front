import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';

const headerLinks = [
  {
    text: '사료',
    to: '/shop/list/feed',
  },
  {
    text: '간식',
    to: '/shop/list/snack',
  },
  {
    text: '용품',
    to: '/shop/list/toy',
  },
];

const ShopListBlock = styled.div`
  background: white;
  .header {
    position: fixed;
    top: 4.5rem;
    left: 0;
    right: 0;
    background: ${palette.gray[0]};
    .wrapper {
      width: 80rem;
      height: 3.5rem;
      margin: 0 auto;
      padding: 0 3rem;
      display: flex;
      align-items: center;
      a {
        border-bottom: solid 0.25rem ${palette.gray[0]};
        width: 8rem;
        line-height: 3.25rem;
        text-align: center;
        color: ${palette.gray[6]};
        font-size: 1.125rem;
        font-weight: 700;
      }
    }
  }
  .banner {
    background: #a9f0fd;
    text-align: center;
    img {
      height: 22rem;
    }
  }
`;

const Spacer = styled.div`
  height: 3.5rem;
`;

const ShopList = () => {
  useEffect(() => {
    window.scrollTo({ top: 600 });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1);
  });

  return (
    <ShopListBlock>
      <HeaderContainer />
      <div className="header">
        <div className="wrapper">
          {headerLinks.map((i) => (
            <NavLink
              key={i.text}
              to={i.to}
              activeStyle={{
                borderBottom: `solid 0.25rem ${palette.sub[0]}`,
                color: palette.sub[0],
              }}
            >
              {i.text}
            </NavLink>
          ))}
        </div>
      </div>
      <Spacer />
      <div className="banner">
        <img src="/images/sub/sub_visual3.png" alt="img" />
      </div>
      <div className="best-list">
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
      </div>
    </ShopListBlock>
  );
};

export default ShopList;
