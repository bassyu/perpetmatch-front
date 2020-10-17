import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Footer from '../components/Footer';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';
import cn from 'classnames';
import Input from '../components/common/Input';
import { Pagination } from 'antd';

const headerTop = 640;
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
const options = ['옵션선택', '검정색', '하얀색'];

const ShopBoardBlock = styled.div`
  background: white;
  .info {
    width: 80rem;
    height: 40rem;
    margin: 0 auto;
    padding: 3rem 4rem;
    display: flex;

    .left {
      width: 50%;
      img {
        width: 100%;
      }
    }
    .right {
      width: 50%;
      padding-left: 4em;

      .title-area {
        border-bottom: 0.325rem solid black;
        .company {
          margin: 0;
          color: ${palette.sub[0]};
          font-size: 1.25rem;
          font-weight: 700;
        }
        .title {
          margin-top: 0.5rem;
          font-size: 1.75rem;
        }
      }
      .price-area {
        border-bottom: solid 0.125rem ${palette.gray[4]};
        padding: 1.5rem 0;
        display: flex;
        font-family: Montserrat;
        font-size: 3rem;
        font-weight: 500;

        .sale {
          color: ${palette.sub[0]};
          font-weight: 700;
        }
        .price {
          margin-left: 2rem;
        }
        .sub {
          font-size: 2rem;
          font-weight: 400;

          &.price {
            line-height: 3rem;
            margin-left: auto;
            color: ${palette.gray[5]};
            font-size: 1.75rem;
            text-decoration: line-through;
          }
        }
      }
      .option-area {
        p {
          padding: 0.25rem 0;
          color: ${palette.gray[7]};
          font-size: 1.25rem;
          font-weight: 700;
        }
      }
      .result-area {
        border-bottom: solid 0.125rem ${palette.gray[4]};
        padding: 1.25rem 0;
        display: flex;
        line-height: 3rem;
        color: ${palette.gray[5]};

        input {
          width: 4rem;
          height: 2.5rem;
          margin-left: 1rem;
          margin-top: 0.25rem;
        }
        .result {
          margin-left: auto;
          color: ${palette.sub[0]};
          font-family: Montserrat;
          font-size: 3rem;
          font-weight: 700;
          .sub {
            font-size: 2rem;
            font-weight: 500;
          }
        }
      }
      .btn-area {
        margin-top: 1.5rem;
        display: flex;
        button {
          width: 48%;
          height: 4.5rem;
          font-size: 1.5rem;
        }
        button + button {
          margin-left: 1rem;
          border: solid 0.125rem ${palette.gray[4]};
          background: white;
          color: ${palette.gray[4]};
        }
      }
    }
  }
  .header {
    border: solid 0.125rem ${palette.gray[1]};
    background: ${palette.gray[0]};

    &.fix {
      position: fixed;
      top: 4.5rem;
      left: 0;
      right: 0;
    }
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
    padding: 2rem 4rem;

    &.fix {
      position: fixed;
      top: 8rem;
      left: 0;
      right: 0;
    }
    .box {
      float: right;
      width: 20rem;
      height: 30rem;
      min-height: 100%;

      select {
        height: 3.5rem;
      }
      .price-area {
        //margin-top: auto;
        margin-top: 20rem;
        display: flex;
        font-size: 1.25rem;
        font-weight: 500;
        .price {
          margin-left: auto;
          font-size: 1.5rem;
        }
      }
      .btn-area {
        margin-top: 1.5rem;
        display: flex;
        button {
          width: 48%;
          height: 4rem;
          font-size: 1.25rem;
        }
        button + button {
          margin-left: 1rem;
          border: solid 0.125rem ${palette.gray[4]};
          background: white;
          color: ${palette.gray[4]};
        }
      }
    }
  }

  .content {
    width: 80rem;
    margin: 0 auto;
    padding: 0 4rem;

    .wrapper {
      width: 48rem;

      img {
        width: 100%;
      }
      p {
        border-bottom: solid 0.125rem ${palette.gray[4]};
        padding: 1rem 0;
        font-size: 1.5rem;
        font-weight: 500;
      }
      .review {
      }
      .question {
      }
      .exchange {
        margin-bottom: 2rem;
        table {
          color: ${palette.main[0]};
          font-size: 1rem;
          font-weight: 500;
          td {
            min-width: 10rem;
            height: 3rem;
          }
        }
      }
    }
  }

  select {
    width: 100%;
    height: 4.5rem;
    border: solid 0.125rem ${palette.sub[0]};
    padding: 0 2rem;
    text-align-last: left;
    background: white;
    color: ${palette.gray[5]};
    font-size: 1.25rem;

    &:hover {
      background: ${palette.gray[0]};
    }
  }
`;

const ShopBoard = () => {
  const refHeader = useRef();
  const [data, setData] = useState({
    company: '마이비펫',
    title: '플라밍고 우디 스타 나무모양의 고무 장난감',
    sale: 15,
    price: 10400,
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
  const [fix, setFix] = useState(false);
  const [count, setCount] = useState(1);

  const onScroll = () => {
    setFix(headerTop < window.scrollY);
  };
  const onChange = (e) => {
    setCount(e.target.value);
  };

  useEffect(() => {
    console.log(refHeader);
    window.addEventListener('scroll', onScroll);
  });

  return (
    <ShopBoardBlock>
      <HeaderContainer />
      <div className="info">
        <div className="left">
          <img src={data.boardImageHead} alt="head-img" />
        </div>
        <div className="right">
          <div className="title-area">
            <p className="company">{data.company}</p>
            <p className="title">{data.title}</p>
          </div>
          <div className="price-area">
            <span className="sale">
              {data.sale}
              <span className="sub">%</span>
            </span>
            <span className="sub price">{data.price}</span>
            <span className="price">
              {data.price * (1 - data.sale / 100)}
              <span className="sub">원</span>
            </span>
          </div>
          <div className="option-area">
            <p>조건부 무료배숭 / 50,000원 이상 무료배송</p>
            <select name="option">
              {options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="result-area">
            <span>수량</span>
            <Input type="number" value={count} onChange={onChange} />
            <span className="result">
              {count * data.price * (1 - data.sale / 100)}
              <span className="sub">원</span>
            </span>
          </div>
          <div className="btn-area">
            <Button>바로구매</Button>
            <Button>장바구니</Button>
          </div>
        </div>
      </div>
      <div className={cn('header', { fix })} ref={refHeader}>
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
      <div className={cn('quick-menu', { fix })}>
        <div className="box">
          <select name="option">
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <div className="price-area">
            주문금액
            <span className="price">
              {count * data.price * (1 - data.sale / 100)}원
            </span>
          </div>
          <div className="btn-area">
            <Button>바로구매</Button>
            <Button>장바구니</Button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <img src={data.boardImageMain} alt="main-img" />
          <div className="review">
            <p>리뷰</p>
            <Pagination defaultCurrent={1} total={50} />
          </div>
          <div className="question">
            <p>문의</p>
            <Pagination defaultCurrent={1} total={50} />
          </div>
          <div className="exchange">
            <p>교환/환불</p>
            <table>
              <tr>
                <td>반품배송비</td>
                <td>3,000원 (최초 배송비가 무료인 경우 6,000원 부과)</td>
              </tr>
              <tr>
                <td>교환배송비</td>
                <td>6,000원</td>
              </tr>
              <tr>
                <td>보내실 곳</td>
                <td>
                  (13025) 경기 하남시 성산곡동 173-1 (선산곡동) 강동 B터미널
                  명일우진
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </ShopBoardBlock>
  );
};

export default ShopBoard;
