import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
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
  .shop-header {
    z-index: 1;
    position: fixed;
    top: 4.5rem;
    left: 0;
    right: 0;
    background: ${palette.gray[0]};
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);

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
  .shop-list {
    width: 80rem;
    margin: 0 auto;
    padding: 0 2rem;
    background: white;
    p {
      margin-top: 3rem;
      margin-bottom: 1.5rem;
      color: ${palette.main[0]};
      font-size: 2rem;
      font-weight: 700;
    }
    ul {
      margin: 0;
      padding: 0;
      overflow: hidden;
      li {
        width: 24rem;
        height: 32rem;
        margin: 0;
        margin-bottom: 3rem;
        margin-right: 2rem;
        float: left;
        overflow: hidden;
        font-weight: 500;

        .ranking {
          position: absolute;
          width: 3rem;
          line-height: 3rem;
          background: ${palette.gray[4]};
          text-align: center;
          color: white;
          font-family: Montserrat;
          font-size: 2rem;
          font-weight: 500;
        }
        img {
          height: 24rem;
          border: solid 0.08rem ${palette.gray[4]};
        }
        .company {
          margin-top: 1rem;
          color: ${palette.sub[0]};
          font-weight: 700;
        }
        .title {
          margin-top: 0.5rem;
        }
        .price-area {
          height: 3rem;
          margin-top: 0.5rem;
          border-top: solid 0.08rem ${palette.gray[4]};
          padding-top: 0.5rem;
          font-size: 1.5rem;
          font-weight: 500;
          .sale {
            color: ${palette.sub[0]};
            font-weight: 700;
          }
          .sub {
            font-size: 1rem;
            font-weight: 400;
            &.price {
              text-decoration: line-through;
            }
          }
          span + span {
            margin-left: 1rem;
          }
        }
      }
      li:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
  .slider {
    height: 25rem;
    background: #edf6f0;
    .wrapper {
      p {
        padding: 2rem 0;
        text-align: center;
        color: ${palette.main[0]};
        font-size: 2rem;
        font-weight: 700;
      }
      width: 80rem;
      margin: 0 auto;
    }
  }
`;

const Spacer = styled.div`
  height: 3.5rem;
`;

const ShopList = () => {
  const [bests, setBests] = useState([
    {
      id: 0,
      image: '/images/sub/img_shopping1.png',
      company: '마이비펫',
      title: '플라밍고 우디 스타 나무모양의 고무 장난감',
      sale: 15,
      price: 10400,
    },
    {
      id: 1,
      image: '/images/sub/img_shopping1.png',
      company: '마이비펫',
      title: '플라밍고 우디 스타 나무모양의 고무 장난감',
      sale: 15,
      price: 10400,
    },
    {
      id: 2,
      image: '/images/sub/img_shopping1.png',
      company: '마이비펫',
      title: '플라밍고 우디 스타 나무모양의 고무 장난감',
      sale: 15,
      price: 10400,
    },
    {
      id: 3,
      image: '/images/sub/img_shopping1.png',
      company: '마이비펫',
      title: '플라밍고 우디 스타 나무모양의 고무 장난감',
      sale: 15,
      price: 10400,
    },
    {
      id: 4,
      image: '/images/sub/img_shopping1.png',
      company: '마이비펫',
      title: '플라밍고 우디 스타 나무모양의 고무 장난감',
      sale: 15,
      price: 10400,
    },
    {
      id: 5,
      image: '/images/sub/img_shopping1.png',
      company: '마이비펫',
      title: '플라밍고 우디 스타 나무모양의 고무 장난감',
      sale: 15,
      price: 10400,
    },
  ]);
  const [news, setNews] = useState([
    {
      id: 0,
      image: '/images/sub/img_shopping1.png',
      company: '마이비펫',
      title: '플라밍고 우디 스타 나무모양의 고무 장난감',
      sale: 15,
      price: 10400,
    },
    {
      id: 1,
      image: '/images/sub/img_shopping1.png',
      company: '마이비펫',
      title: '플라밍고 우디 스타 나무모양의 고무 장난감',
      sale: 15,
      price: 10400,
    },
    {
      id: 2,
      image: '/images/sub/img_shopping1.png',
      company: '마이비펫',
      title: '플라밍고 우디 스타 나무모양의 고무 장난감',
      sale: 15,
      price: 10400,
    },
    {
      id: 3,
      image: '/images/sub/img_shopping1.png',
      company: '마이비펫',
      title: '플라밍고 우디 스타 나무모양의 고무 장난감',
      sale: 15,
      price: 10400,
    },
    {
      id: 4,
      image: '/images/sub/img_shopping1.png',
      company: '마이비펫',
      title: '플라밍고 우디 스타 나무모양의 고무 장난감',
      sale: 15,
      price: 10400,
    },
    {
      id: 5,
      image: '/images/sub/img_shopping1.png',
      company: '마이비펫',
      title: '플라밍고 우디 스타 나무모양의 고무 장난감',
      sale: 15,
      price: 10400,
    },
  ]);

  useEffect(() => {
    window.scrollTo({ top: 600 });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1);
  });

  return (
    <ShopListBlock>
      <HeaderContainer />
      <div className="shop-header">
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
      <div className="shop-list">
        <p>BEST</p>
        <ul>
          {bests.map((i, index) => (
            <li key={i.id}>
              <Link to={`/shop/board/${i.id}`}>
                <div className="ranking">{index + 1}</div>
                <img src={i.image} alt="best" />
                <div className="company">{i.company}</div>
                <div className="title">{i.title}</div>
                <div className="price-area">
                  <span className="sale">
                    {i.sale}
                    <span className="sub">%</span>
                  </span>
                  <span className="sub price">{i.price}</span>
                  <span className="price">
                    {i.price * (1 - i.sale / 100)}
                    <span className="sub">껌</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="slider">
        <div className="wrapper">
          <p>인기 해시태그 용품</p>
        </div>
      </div>
      <div className="shop-list">
        <p>NEW</p>
        <ul>
          {news.map((i, index) => (
            <li key={i.id}>
              <Link to={`/shop/board/${i.id}`}>
                <div className="ranking">{index + 1}</div>
                <img src={i.image} alt="best" />
                <div className="company">{i.company}</div>
                <div className="title">{i.title}</div>
                <div className="price-area">
                  <span className="sale">
                    {i.sale}
                    <span className="sub">%</span>
                  </span>
                  <span className="sub price">{i.price}</span>
                  <span className="price">
                    {i.price - (1 - i.sale / 100)}
                    <span className="sub">껌</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </ShopListBlock>
  );
};

export default ShopList;
