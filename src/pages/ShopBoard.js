import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Footer from '../components/Footer';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';
import cn from 'classnames';
import Input from '../components/common/Input';
import { Pagination, message } from 'antd';
import throttle from '../lib/throttle';
import { withRouter } from 'react-router-dom';
import * as shopAPI from '../lib/api/shop';

const headerTop = 640;
const headerSize = 8 * 16;

const options = ['옵션선택'];

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
      padding-left: 5em;

      .title-area {
        border-bottom: 0.325rem solid black;

        .company {
          margin: 0;
          color: ${palette.sub};
          font-size: 1.25rem;
          font-weight: 700;
        }
        .title {
          margin-top: 0.5rem;
          font-size: 1.75rem;
        }
      }
      .price-area {
        border-bottom: solid 0.01rem ${palette.gray[5]};
        padding: 0.75rem 0;
        display: flex;
        font-family: Montserrat;
        font-size: 3rem;
        font-weight: 500;

        .sale {
          color: ${palette.sub};
          font-weight: 700;
        }
        .price {
          margin-left: 1rem;
        }
        .sub {
          font-size: 2rem;
          font-weight: 400;

          &.price {
            line-height: 4.5rem;
            margin-left: auto;
            color: ${palette.gray[5]};
            font-size: 1.75rem;
            text-decoration: line-through;
          }
        }
      }
      .option-area {
        p {
          margin: 0;
          padding: 1rem 0;
          color: ${palette.gray[7]};
          font-size: 1rem;
          font-weight: 700;
        }
      }
      .result-area {
        border-bottom: solid 0.01rem ${palette.gray[5]};
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
          color: ${palette.sub};
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
          height: 4rem;
          font-size: 1.25rem;
        }
        button + button {
          margin-left: 1rem;
          border: solid 0.01rem ${palette.gray[5]};
          background: white;
          color: ${palette.gray[5]};
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
        cursor: pointer;

        &.active {
          color: ${palette.sub};
        }
      }
    }
  }

  .quick-menu {
    width: 80rem;
    height: 0;
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
        font-size: 1rem;
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
          height: 3.5rem;
          font-size: 1rem;
        }
        button + button {
          margin-left: 1rem;
          border: solid 0.01rem ${palette.gray[5]};
          background: white;
          color: ${palette.gray[5]};
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
      ul {
        padding-left: 15rem;
      }
      .reviews {
        .review {
          margin: 1rem 0;
          border-bottom: solid 0.01rem ${palette.gray[5]};
          padding: 1rem 0;

          .title {
            margin: 0.25rem;
          }
          img {
            width: 8rem;
          }
        }
      }
      .questions {
        min-height: 20rem;
      }
      .exchange {
        margin-bottom: 2rem;

        table {
          color: ${palette.main};
          font-size: 1rem;
          font-weight: 500;

          td {
            min-width: 8rem;
            height: 3rem;
          }
        }
      }
    }
  }

  select {
    width: 100%;
    height: 4.25rem;
    border: solid 0.125rem ${palette.sub};
    padding: 0 1rem;
    text-align-last: left;
    background: white;
    color: ${palette.gray[5]};
    font-size: 1.25rem;

    &:hover {
      background: ${palette.gray[0]};
    }
  }
`;

const ShopBoard = ({ history, match }) => {
  const id = match.params.id;
  const refImg = useRef();
  const refReviews = useRef();
  const refQuestions = useRef();
  const refExchange = useRef();
  const [item, setItem] = useState({
    company: '마이비펫',
    title: '플라밍고 우디 스타 나무모양의 고무 장난감',
    sale: 15,
    price: 10400,
    boardImageHead: '/images/sub/shop_board_head.png',
    boardImageMain: '/images/sub/shop_board_main.png',
    stockQuantity: 0,
  });
  const [fix, setFix] = useState(false);
  const [active, setActive] = useState('');
  const [count, setCount] = useState(1);

  const onChangeCount = (e) => {
    setCount(e.target.value);
  };
  const onClickBuy = (e) => {
    async function callAPI() {
      try {
        await shopAPI.addCart({ id, count });
        history.push('/shop/cart');
      } catch (e) {
        console.log('장바구니 추가 오류');
      }
    }
    callAPI();
  };
  const onClickCart = (e) => {
    async function callAPI() {
      try {
        const response = await shopAPI.addCart({ id, count });
        message.success(response.data.message);
      } catch (e) {
        console.log('장바구니 추가 오류');
      }
    }
    callAPI();
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });

    const onScroll = () => {
      const y = window.scrollY + headerSize + 1;
      setFix(headerTop < y);

      let newActive = '';
      if (refExchange.current.offsetTop < y) {
        newActive = '교환/환불';
      } else if (refQuestions.current.offsetTop < y) {
        newActive = '문의';
      } else if (refReviews.current.offsetTop < y) {
        newActive = '리뷰';
      } else if (refImg.current.offsetTop < y) {
        newActive = '상품정보';
      }
      setActive(newActive);
    };
    const onScrollThrottle = throttle(onScroll, 100);

    window.addEventListener('scroll', onScrollThrottle);
    return () => {
      window.removeEventListener('scroll', onScrollThrottle);
    };
  }, []);

  useEffect(() => {
    async function callAPI() {
      try {
        const response = await shopAPI.getItem({ id });
        setItem(response.data.data);
      } catch (e) {
        console.log('불러오기 오류');
      }
    }
    callAPI();
  }, [id]);

  const headerItems = [
    {
      text: '상품정보',
      top: refImg.current && refImg.current.offsetTop - headerSize,
    },
    {
      text: '리뷰',
      top: refReviews.current && refReviews.current.offsetTop - headerSize,
    },
    {
      text: '문의',
      top: refQuestions.current && refQuestions.current.offsetTop - headerSize,
    },
    {
      text: '교환/환불',
      top: refExchange.current && refExchange.current.offsetTop - headerSize,
    },
  ];

  return (
    <ShopBoardBlock>
      <HeaderContainer />
      <div className="info">
        <div className="left">
          <img src={item.boardImageHead} alt="head-img" />
        </div>
        <div className="right">
          <div className="title-area">
            <p className="company">{item.company}</p>
            <p className="title">{item.title}</p>
          </div>
          <div className="price-area">
            <span className="sale">
              {item.sale}
              <span className="sub">%</span>
            </span>
            <span className="sub price">{item.price}</span>
            <span className="price">
              {item.price * (1 - item.sale / 100)}
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
            <Input type="number" value={count} onChange={onChangeCount} />
            <span className="result">
              {count * item.price * (1 - item.sale / 100)}
              <span className="sub">원</span>
            </span>
          </div>
          <div className="btn-area">
            <Button name="buy" onClick={onClickBuy}>
              바로구매
            </Button>
            <Button name="cart" onClick={onClickCart}>
              장바구니 추가
            </Button>
          </div>
        </div>
      </div>
      <div className={cn('header', { fix })}>
        <div className="wrapper">
          {headerItems.map((i) => (
            <div
              className={cn('item', { active: i.text === active })}
              key={i.text}
              onClick={() => {
                window.scrollTo({ top: i.top });
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
              {count * item.price * (1 - item.sale / 100)}원
            </span>
          </div>
          <div className="btn-area">
            <Button onClick={onClickBuy}>바로구매</Button>
            <Button>장바구니 추가</Button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="wrapper">
          <img src={item.boardImageMain} alt="main-img" ref={refImg} />
          <div className="reviews" ref={refReviews}>
            <p>리뷰</p>
            <div className="review">
              <div className="title">건이은채</div>
              <div className="title">옵션 : L / 품종 : 포메라니안</div>
              <img src="/images/sub/review.png" alt="review-img" />
              <div className="description">
                아기가 기절했어요. 기절방석 맞네요 강아지랑 싸워요
              </div>
            </div>
            <div className="review">
              <div className="title">강강술래</div>
              <div className="title">옵션 : M / 품종 : 푸들</div>
              <div className="description">빠른배송 만족합니다!</div>
            </div>
            <Pagination defaultCurrent={1} total={50} />
          </div>
          <div className="questions" ref={refQuestions}>
            <p>문의</p>
            <Pagination defaultCurrent={1} total={50} />
          </div>
          <div className="exchange" ref={refExchange}>
            <p>교환/환불</p>
            <table>
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </ShopBoardBlock>
  );
};

export default withRouter(ShopBoard);
