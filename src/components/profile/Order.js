import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import * as profileAPI from '../../lib/api/profile';

const OrderBlcok = styled.div`
  overflow: scroll;
  height: 30rem;

  .order {
    height: 8rem;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;

    img {
      width: 6rem;
      height: 6rem;
    }
    .info {
      width: 50rem;

      p {
        margin: 0;
        padding-top: 0.25rem;
        font-weight: 700;
      }
      .title {
        color: ${palette.gray[7]};
        font-size: 1.25rem;
      }
      .company {
        color: ${palette.gray[6]};
      }
      .price {
        font-size: 1.5rem;

        .count {
          font-size: 1.25rem;
        }
      }
    }
    .btn-area {
      width: 10rem;

      .btn-review {
        border: solid 0.01rem ${palette.gray[6]};
        background: white;
        color: ${palette.gray[6]};
      }
      button {
        height: 2.75rem;
        margin-bottom: 0.5rem;
        padding: 0.5rem;
      }
    }
  }
  .order + .order {
    border-top: solid 0.01rem ${palette.gray[6]};
  }
`;

const Order = ({ match }) => {
  const id = match.params.id;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function callAPI() {
      try {
        const response = await profileAPI.getUserOrders({ id });
        setOrders(response.data.data);
      } catch (e) {
        console.log('주문내역 오류');
      }
    }
    callAPI();
  }, []);

  return (
    <OrderBlcok>
      {orders.map((order) => (
        <div key={order.id} className="order">
          <img src={order.image} alt="order-img" />
          <div className="info">
            <p className="title">{order.title}</p>
            <p className="company">{order.company}</p>
            <p className="price">
              {order.price}
              <span className="count">껌 / {order.count}개</span>
            </p>
          </div>
          <div className="btn-area">
            <Link to={`/shop/board/${order.id}`}>
              <Button className="btn-review" fullWidth>
                리뷰작성
              </Button>
            </Link>
            <Link to={`/shop/board/${order.id}`}>
              <Button fullWidth background={palette.gray[6]}>
                재구매
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </OrderBlcok>
  );
};

export default Order;
