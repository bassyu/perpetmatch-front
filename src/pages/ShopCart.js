import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';
import { Checkbox } from 'antd';
import * as shopAPI from '../lib/api/shop';
import { Link } from 'react-router-dom';

const ShopCartBlcok = styled.div`
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

  .content {
    width: 80rem;
    height: 24rem;
    padding: 0 2rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .left {
      width: 64%;
      background: white;

      .check-area {
        height: 2.5rem;
        display: flex;
        justify-content: space-between;
        background: ${palette.gray[2]};
      }
      .cart-area {
        overflow: scroll;
        height: 21.5rem;
        padding: 1.25rem;

        .head {
          border-bottom: solid 0.01rem ${palette.gray[6]};
          padding-bottom: 1.25rem;
          text-align: center;
          color: ${palette.main};
          font-size: 1.125rem;
          font-weight: 700;
        }
        .item {
          display: flex;
          justify-content: space-between;

          .item-content {
            width: 98%;

            .top {
              height: 5rem;
              display: flex;
              justify-content: space-between;

              img {
                width: 5rem;
              }
              .title {
                width: 36rem;

                p {
                  margin: 0.25rem 0;
                  font-size: 1.125rem;
                  font-weight: 500;
                  color: ${palette.gray[7]};
                }
                .company {
                  font-size: 0.75rem;
                  color: ${palette.gray[6]};
                }
              }
              button {
                width: 1.125rem;
                height: 1.125rem;
                border: none;
                padding: 0;
                background: none;

                &:hover {
                  color: red;
                  cursor: pointer;
                }
              }
            }
            .bottom {
              width: 100%;
              height: 5.5rem;
              margin-top: 0.5rem;
              padding: 0.75rem 1.25rem;
              background: ${palette.gray[1]};

              p {
                margin-bottom: 0.5rem;
                font-weight: 700;
              }
              input {
                width: 6rem;
                height: 1rem;
              }
              button {
                height: 1.75rem;
                margin-left: 0.5rem;
              }
              .result-area {
                display: flex;
                justify-content: space-between;

                .result {
                  font-size: 1.25rem;
                  font-weight: 700;
                }
              }
            }
          }
        }
        .item + .item {
          margin-top: 2.5rem;
        }
      }
    }
    .right {
      width: 32%;
      margin-top: 2.5rem;
      background: white;

      .calc {
        height: 80%;
        padding: 2rem;

        table {
          width: 100%;
          color: ${palette.gray[8]};
          font-size: 1.125rem;
          font-weight: 700;

          tr {
            height: 3rem;
          }
          .price {
            text-align: right;
          }
          .result {
            border-top: solid 0.01rem ${palette.gray[6]};
            color: black;

            td {
              padding-top: 1rem;
            }
            .price {
              font-size: 2rem;
            }
          }
        }
      }
      button {
        height: 20%;
        font-size: 1.25rem;
      }
    }
  }
`;

const ShopCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 321,
      image:
        'https://shopbucket.s3.ap-northeast-2.amazonaws.com/%EB%B2%85%EC%8A%A41.jpg',
      title: '벅스펫 국내산 유기농 베지믹스 관절건강 사료',
      price: 51990,
      company: '벨리스',
      count: 3,
    },
  ]);
  const [total, setTotal] = useState(0);
  const [shipping] = useState(2500);
  const [sale] = useState(2500);
  const [result, setResult] = useState(0);

  const onRemove = (e) => {
    e.persist();
    async function callAPI() {
      try {
        await shopAPI.removeCart({ id: e.target.name });
        const response = await shopAPI.getCartItems();
        setCartItems(response.data.data.bags);
      } catch (e) {
        console.log('장바구니 삭제 오류');
      }
    }
    callAPI();
  };

  useEffect(() => {
    async function callAPI() {
      try {
        const response = await shopAPI.getCartItems();
        setCartItems(response.data.data.bags);
      } catch (e) {
        console.log('불러오기 오류');
      }
    }
    callAPI();
  }, []);

  useEffect(() => {
    setTotal(
      cartItems.map((i) => i.count * i.price).reduce((p, c) => p + c, 0),
    );
  }, [cartItems]);

  useEffect(() => {
    setResult(total + shipping - sale);
  }, [total, shipping, sale]);

  return (
    <ShopCartBlcok>
      <HeaderContainer />
      <div className="content">
        <div className="left">
          <div className="check-area">
            <Checkbox>모두선택</Checkbox>
            <div>선택삭제</div>
          </div>
          <div className="cart-area">
            <p className="head">장바구니</p>
            {cartItems.map((item) => (
              <div className="item" key={item.id}>
                <Checkbox />
                <div className="item-content">
                  <div className="top">
                    <img src={item.image} alt="item-img" />
                    <div className="title">
                      <p>{item.title}</p>
                      <p className="company">{item.company}</p>
                    </div>
                    <button name={item.id} onClick={onRemove}>
                      X
                    </button>
                  </div>
                  <div className="bottom">
                    <p>옵션내용</p>
                    <div className="result-area">
                      <div>
                        <Input type="number" value={item.count} readOnly />
                        <Button>변경</Button>
                      </div>
                      <div className="result">{item.count * item.price}원</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="calc">
            <table>
              <tbody>
                <tr>
                  <td>총 상품금액</td>
                  <td className="price">{total}</td>
                </tr>
                <tr>
                  <td>총 배송비</td>
                  <td className="price">+{shipping}</td>
                </tr>
                <tr>
                  <td>총 할인금액</td>
                  <td className="price">-{sale}</td>
                </tr>
                <tr className="result">
                  <td>결재금액</td>
                  <td className="price">{result}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link to="/shop/checkout">
            <Button fullWidth>상품 구매하기</Button>
          </Link>
        </div>
      </div>
    </ShopCartBlcok>
  );
};

export default ShopCart;
