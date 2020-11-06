import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';
import Slider from 'react-slick';
import Button from '../components/common/Button';
import { AiOutlineArrowRight } from 'react-icons/ai';
import * as shopAPI from '../lib/api/shop';
import getCommaNumber from '../lib/getCommaNumber';

const headerLinks = [
  {
    text: '사료',
    to: '/shop/list/feeds',
  },
  {
    text: '간식',
    to: '/shop/list/snacks',
  },
  {
    text: '용품',
    to: '/shop/list/goods',
  },
];

const sliderItems = [
  {
    text: '#처방사료',
    image: '/images/sub/img_item1.png',
    background: 'rgba(86, 173, 180, 0.7)',
  },
  {
    text: '#유기농간식',
    image: '/images/sub/img_item2.png',
    background: 'rgba(143, 164, 33, 0.7)',
  },
  {
    text: '#교육장난감',
    image: '/images/sub/img_item3.png',
    background: 'rgba(225, 192, 115, 0.7)',
  },
  {
    text: '#처방사료',
    image: '/images/sub/img_item1.png',
    background: 'rgba(86, 173, 180, 0.7)',
  },
  {
    text: '#유기농간식',
    image: '/images/sub/img_item2.png',
    background: 'rgba(143, 164, 33, 0.7)',
  },
  {
    text: '#교육장난감',
    image: '/images/sub/img_item3.png',
    background: 'rgba(225, 192, 115, 0.7)',
  },
];

const titleMap = {
  feeds: '베스트 사료',
  snacks: '베스트 간식',
  goods: '베스트 용품',
};

const ShopListBlock = styled.div`
  background: white;

  .header {
    z-index: 2;
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

      .link {
        border-bottom: solid 0.25rem ${palette.gray[0]};
        width: 8rem;
        line-height: 3.25rem;
        text-align: center;
        color: ${palette.gray[6]};
        font-size: 1.125rem;
        font-weight: 700;

        &:hover {
          color: ${palette.sub};
        }
      }
    }
  }
  .banner {
    background: #a9f0fd;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
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
      color: ${palette.main};
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
        float: left;
        margin: 0;
        margin-bottom: 3rem;
        margin-right: 2rem;
        overflow: hidden;
        font-weight: 500;

        a {
          color: black;
        }
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
          margin-top: 0.5rem;
          color: ${palette.sub};
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
          font-family: Montserrat;
          font-size: 1.5rem;
          font-weight: 500;

          .sale {
            color: ${palette.sub};
            font-weight: 700;
          }
          .sub {
            font-size: 1rem;

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
    .btn-area {
      width: 20rem;
      margin: 0 auto;
      margin-bottom: 5rem;

      button {
        border-radius: 4rem;
        padding: 0.75rem 0;
        background: #9f83cb;
        font-size: 1.25rem;
      }
    }
  }
  .slider {
    background: #edf6f0;

    .wrapper {
      width: 80rem;
      margin: 0 auto;
      padding: 2rem 10rem;

      p {
        margin-top: 0;
        margin-bottom: 1rem;
        text-align: center;
        color: ${palette.main};
        font-size: 2rem;
        font-weight: 700;
      }
      .slider-item {
        position: relative;
        overflow: hidden;
        border: solid 1.5rem #edf6f0;
        border-radius: 10rem;

        .text {
          position: absolute;
          width: 100%;
          height: 100%;
          padding-top: 40%;
          background: ${({ background }) => background || 'rgba(0, 0, 0, 0.3)'};
          text-align: center;
          color: white;
          font-size: 1.5rem;
          font-weight: 500;
        }
        img {
          width: 100%;
        }
      }
    }
  }
`;

const Spacer = styled.div`
  height: 3.5rem;
`;

const ShopList = ({ match }) => {
  const category = match.params.category;
  const isMain = category === 'main';
  const [bests, setBests] = useState([
    {
      id: 0,
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
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0 });

    async function callMainAPI() {
      try {
        const response = await shopAPI.getBests();
        setBests(response.data.data.content);
      } catch (e) {
        console.log('Best 불러오기 오류');
      }
      try {
        const response = await shopAPI.getNews();
        setNews(response.data.data.content);
      } catch (e) {
        console.log('New 불러오기 오류');
      }
    }

    async function callAPI() {
      try {
        const response = await shopAPI.getItems({ category });
        setBests(response.data.data);
      } catch (e) {
        console.log('Item 불러오기 오류');
      }
    }

    isMain ? callMainAPI() : callAPI();
  }, [isMain, category]);

  const settings = {
    className: 'center',
    centerMode: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <ShopListBlock>
      <HeaderContainer />
      <div className="header">
        <div className="wrapper">
          {headerLinks.map((i) => (
            <NavLink
              className="link"
              key={i.to}
              to={i.to}
              activeStyle={{
                borderBottom: `solid 0.25rem ${palette.sub}`,
                color: palette.sub,
              }}
            >
              {i.text}
            </NavLink>
          ))}
        </div>
      </div>
      <Spacer />
      {isMain ? (
        <>
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
                    <img src={i.boardImageHead} alt="best-img" />
                    <div className="company">{i.company}</div>
                    <div className="title">{i.title}</div>
                    <div className="price-area">
                      <span className="sale">
                        {i.sale}
                        <span className="sub">%</span>
                      </span>
                      <span className="sub price">
                        {getCommaNumber(i.price)}
                      </span>
                      <span className="price">
                        {getCommaNumber(i.price * (1 - i.sale / 100))}
                        <span className="sub">원</span>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="btn-area">
              <Link to="/shop/list/feeds">
                <Button fullWidth>
                  다른 상품 더 보기 <AiOutlineArrowRight size="1rem" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="slider">
            <div className="wrapper">
              <p>인기 해시태그 용품</p>
              <Slider {...settings}>
                {sliderItems.map((i, index) => (
                  <div className="slider-item" key={index}>
                    <div className="text" style={{ background: i.background }}>
                      {i.text}
                    </div>
                    <img src={i.image} alt="slider-img" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="shop-list">
            <p>NEW</p>
            <ul>
              {news.map((i) => (
                <li key={i.id}>
                  <Link to={`/shop/board/${i.id}`}>
                    <img src={i.boardImageHead} alt="new-img" />
                    <div className="company">{i.company}</div>
                    <div className="title">{i.title}</div>
                    <div className="price-area">
                      <span className="sale">
                        {i.sale}
                        <span className="sub">%</span>
                      </span>
                      <span className="sub price">
                        {getCommaNumber(i.price)}
                      </span>
                      <span className="price">
                        {getCommaNumber(i.price * (1 - i.sale / 100))}
                        <span className="sub">껌</span>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="btn-area">
              <Link to="/shop/list/feeds">
                <Button fullWidth>
                  다른 상품 더 보기 <AiOutlineArrowRight size="1rem" />
                </Button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="shop-list">
            <p>{titleMap[category]}</p>
            <ul>
              {bests.map((i, index) => (
                <li key={i.id}>
                  <Link to={`/shop/board/${i.id}`}>
                    <div className="ranking">{index + 1}</div>
                    <img src={i.boardImageHead} alt="best-img" />
                    <div className="company">{i.company}</div>
                    <div className="title">{i.title}</div>
                    <div className="price-area">
                      <span className="sale">
                        {i.sale}
                        <span className="sub">%</span>
                      </span>
                      <span className="sub price">
                        {getCommaNumber(i.price)}
                      </span>
                      <span className="price">
                        {getCommaNumber(i.price * (1 - i.sale / 100))}
                        <span className="sub">원</span>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <Footer />
    </ShopListBlock>
  );
};

export default ShopList;
