import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';
import {
  FaCcMastercard,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaPaypal,
  FaAmazonPay,
  FaApplePay,
  FaCcVisa,
} from 'react-icons/fa';
import { Checkbox, message } from 'antd';
import * as shopAPI from '../lib/api/shop';
import { withRouter } from 'react-router-dom';

const iconSize = 3 * 16;

const ShopCheckoutBlcok = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  padding-top: 4.5rem;
  display: flex;
  justify-content: center;
  background: ${palette.gray[2]};

  .wrapper {
    width: 80rem;
    padding: 0 4rem;

    .sub-title {
      margin-top: 3rem;
      color: ${palette.main};
      font-size: 1.5rem;
      font-weight: 700;
    }
    .box {
      min-height: 10rem;
      margin: 1rem 0;
      padding: 2rem;
      background: white;

      &.cart {
        height: 14rem;
        display: flex;
        justify-content: space-between;
      }

      .cart-area {
        overflow: scroll;
        width: 70%;
        height: 100%;

        .cart-item {
          height: 6rem;
          display: flex;

          img {
            width: 6rem;
          }
          .info {
            padding: 1rem;
            font-weight: 700;

            .title {
              margin: 0;
              color: ${palette.gray[7]};
            }
            .company {
              margin: 0;
              color: ${palette.gray[6]};
            }
            .price {
              margin: 0;
              color: black;
            }
          }
        }
        .cart-item + .cart-item {
          margin-top: 0.25rem;
          border-top: dotted 0.01rem ${palette.gray[6]};
          padding-top: 0.25rem;
        }
      }
      .result-area {
        width: 30%;
        height: 100%;
        border-left: dotted 0.01rem ${palette.gray[6]};
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 700;

        .total {
          margin: 0;
          font-size: 1.75rem;
        }
      }

      table {
        tr {
          height: 5rem;

          td {
            width: 40rem;

            button {
              width: 30%;
              height: 3.25rem;
              margin-top: 0;
              margin-left: 1rem;
              font-size: 1rem;
            }
          }
        }
        .left {
          width: 7rem;
          color: ${palette.gray[6]};
          font-size: 1.125rem;
          font-weight: 500;
        }
      }
      .sms {
        margin-top: 1rem;
        margin-left: 7rem;
        font-weight: 500;
      }
      .row {
        display: flex;
        justify-content: space-around;

        input[type='radio'] {
          display: none;
        }
        input[type='radio'] + .icon {
          width: 6rem;
          height: 6rem;
          border: solid 0.01rem ${palette.gray[3]};
          padding: 0.5rem;
          text-align: center;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;

          &:hover {
            background: #e1eee5;
          }

          p {
            margin: 0;
            color: black;
            font-size: 0.75rem;
          }
        }
        input[type='radio']:checked + .icon {
          background: #e1eee5;
        }
      }
      .alert {
        min-height: 5rem;
        margin: 2rem 0;
        border: solid 0.01rem ${palette.gray[2]};
        padding: 1rem 2rem;
        background: ${palette.gray[1]};

        p {
          margin: 0.5rem 0;
          color: ${palette.gray[7]};
          font-size: 1rem;
          font-weight: 500;
        }
        .head {
          color: black;
          font-weight: 700;
        }
      }
      .tos {
        color: black;
        font-weight: 700;
      }
      button {
        height: 4.5rem;
        margin-top: 3rem;
        font-size: 1.25rem;
      }
    }
  }
`;

const ShopCheckout = ({ history }) => {
  const [form, setForm] = useState({
    dear: '',
    zipcode: '',
    city: '',
    street: '',
    memo: '',
  });
  const [total, setTotal] = useState(0);
  const [tos, setTos] = useState(false);
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

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onChangeTos = (e) => {
    setTos(e.target.checked);
  };
  const onClick = (e) => {
    if (!tos) {
      message.warning('약관에 동의해주세요!', 1);
      return;
    }
    async function callAPI() {
      try {
        await message.loading({
          content: '결제중...',
          key: 'checkout',
          duration: '2',
        });
        await shopAPI.checkoutCart(form);
        await message.success({
          content: '결제완료',
          key: 'checkout',
          duration: '1',
        });
        history.push('/shop/list/main');
      } catch (e) {
        message.error('결제 오류');
      }
    }
    callAPI();
  };

  useEffect(() => {
    async function callAPI() {
      try {
        const response = await shopAPI.getCartItems();
        const newCartItems = response.data.data.bags;
        setCartItems(newCartItems);
        setTotal(
          newCartItems.map((i) => i.count * i.price).reduce((p, c) => p + c, 0),
        );
      } catch (e) {
        console.log('불러오기 오류');
      }
    }
    callAPI();
  }, []);

  return (
    <ShopCheckoutBlcok>
      <HeaderContainer />
      <div className="wrapper">
        <p className="sub-title">주문/결제</p>
        <div className="box cart">
          <div className="cart-area">
            {cartItems.map((item) => (
              <div className="cart-item">
                <img src={item.image} alt="item-img" />
                <div className="info">
                  <p className="title">{item.title}</p>
                  <p className="company">{item.company}</p>
                  <p className="price">
                    {item.price}원 / {item.count}개
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="result-area">
            <p>결제금액</p>
            <p className="total">{total}원</p>
          </div>
        </div>
        <p className="sub-title">배송지</p>
        <div className="box">
          <table>
            <tbody>
              <tr>
                <td className="left">받는 분</td>
                <td>
                  <Input
                    name="dear"
                    value={form.dear}
                    onChange={onChange}
                    width="70%"
                  />
                </td>
              </tr>
              <tr>
                <td className="left">우편번호</td>
                <td>
                  <Input
                    name="zipcode"
                    value={form.zipcode}
                    onChange={onChange}
                    width="40%"
                  />
                  <Button>배송지변경</Button>
                </td>
              </tr>
              <tr>
                <td className="left">주소</td>
                <td>
                  <Input name="city" value={form.city} onChange={onChange} />
                </td>
              </tr>
              <tr>
                <td className="left"></td>
                <td>
                  <Input
                    name="street"
                    value={form.street}
                    placeholder="상세주소"
                    onChange={onChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="left">전화번호</td>
                <td>
                  <Input />
                </td>
              </tr>
              <tr>
                <td className="left">배송메모</td>
                <td>
                  <Input
                    name="memo"
                    value={form.memo}
                    onChange={onChange}
                    placeholder="ex) 부재중시 경비실에 맡겨주세요!"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="sub-title">주문자</p>
        <div className="box">
          <table>
            <tbody>
              <tr>
                <td className="left">보내는 분</td>
                <td>
                  <Input width="70%" />
                </td>
              </tr>
              <tr>
                <td className="left">이메일</td>
                <td>
                  <Input width="70%" />
                </td>
              </tr>
              <tr>
                <td className="left">전화번호</td>
                <td>
                  <Input width="70%" />
                </td>
              </tr>
            </tbody>
          </table>
          <Checkbox className="sms">
            SMS 수신동의 (배송 정보를 SMS로 보내드립니다.)
          </Checkbox>
        </div>
        <p className="sub-title">결제수단</p>
        <div className="box">
          <div className="row">
            <label>
              <input type="radio" name="payment" />
              <div className="icon">
                <FaMobileAlt size={iconSize} />
                <p>핸드폰결제</p>
              </div>
            </label>
            <label>
              <input type="radio" name="payment" />
              <div className="icon">
                <FaCcMastercard size={iconSize} />
                <p>카드결제</p>
              </div>
            </label>
            <label>
              <input type="radio" name="payment" />
              <div className="icon">
                <FaMoneyCheckAlt size={iconSize} />
                <p>무통장입금</p>
              </div>
            </label>
            <label>
              <input type="radio" name="payment" />
              <div className="icon">
                <FaCcVisa size={iconSize} />
                <p>비자</p>
              </div>
            </label>
            <label>
              <input type="radio" name="payment" />
              <div className="icon">
                <FaPaypal size={iconSize} />
                <p>페이팔</p>
              </div>
            </label>
            <label>
              <input type="radio" name="payment" />
              <div className="icon">
                <FaAmazonPay size={iconSize} />
                <p>아마존페이</p>
              </div>
            </label>
            <label>
              <input type="radio" name="payment" />
              <div className="icon">
                <FaApplePay size={iconSize} />
                <p>애플페이</p>
              </div>
            </label>
          </div>
          <div className="alert">
            <p className="head">{} 결제 혜택</p>
            <p>- 20만원/10만원 이상 결제시 1만원/5천원 할인(1일 1회 가능)</p>
          </div>
          <Checkbox className="tos" checked={tos} onChange={onChangeTos}>
            결제 진행 필수사항 동의
          </Checkbox>
          <Button fullWidth onClick={onClick}>
            결제하기
          </Button>
        </div>
      </div>
    </ShopCheckoutBlcok>
  );
};

export default withRouter(ShopCheckout);
