import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Footer from '../components/Footer';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';

const headerItem = [
  {
    text: '상품정보',
  },
  {
    text: '리뷰',
  },
  {
    text: '문의',
  },
  {
    text: '교환/환불',
  },
];

const ShopBoardBlock = styled.div`
  background: white;
  .info {
    width: 80rem;
    height: 36rem;
    margin: 3rem auto;
    display: flex;
    .left {
      width: 50%;
      background: silver;
      img {
        width: 90%;
      }
    }
    .right {
      width: 50%;
      background: skyblue;
    }
  }
  .header {
    border: solid 0.125rem ${palette.gray[1]};
    background: ${palette.gray[0]};

    .wrapper {
      width: 80rem;
      height: 3.5rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .item {
        //border-bottom: solid 0.375rem ${palette.gray[0]};
        width: 8rem;
        line-height: 3.5rem;
        text-align: center;
        color: ${palette.gray[7]};
        font-size: 1.125rem;
        font-weight: 700;
      }
    }
  }

  .quick-menu {
    width: 80rem;
    margin: 0 auto;

    .box {
      float: right;
      width: 20rem;
      height: 40rem;
      min-height: 100%;
      background: skyblue;
    }
  }

  .content {
    width: 80rem;
    margin: 0 auto;

    img {
      width: 56rem;
    }
  }
`;

const ShopBoard = () => {
  const [data, setData] = useState({
    company: '마이비펫',
    title: '플라밍고 우디 스타 나무모양의 고무 장난감',
    sale: '71',
    price: '79800',
    boardImageHead: '/images/sub/shop_board_head.png',
    boardImageMain: '/images/sub/shop_board_main.png',
    review: [
      {
        nickname: '건이은채',
        star: 4,
        option: 'L',
        petTitle: '푸들',
        image: '/images',
        description: '아기가 기절했어요. 기절방석 맞네요 강아지랑 싸워요',
        like: 45,
      },
    ],
  });
  return (
    <ShopBoardBlock>
      <HeaderContainer />
      <div className="info">
        <div className="left">
          <img src={data.boardImageHead} alt="head-img" />
        </div>
        <div className="right"></div>
      </div>
      <div className="header">
        <div className="wrapper">
          {headerItem.map((i) => (
            <div
              className="item"
              key={i.text}
              activeStyle={{
                borderBottom: `solid 0.375rem ${palette.sub[0]}`,
                color: palette.sub[0],
              }}
            >
              {i.text}
            </div>
          ))}
        </div>
      </div>
      <div className="quick-menu">
        <div className="box"></div>
      </div>
      <div className="content">
        <img src={data.boardImageMain} alt="main-img" />
      </div>
      <Footer />
    </ShopBoardBlock>
  );
};

export default ShopBoard;
