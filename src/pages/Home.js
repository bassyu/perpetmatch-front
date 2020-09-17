import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Slider from 'react-slick';

const slideItems = [
  {
    key: 'slide1',
    img: '/images/home/bg_visual1.png',
  },
  {
    key: 'slide2',
    img: '/images/home/bg_visual2.png',
  },
  {
    key: 'slide3',
    img: '/images/home/bg_visual3.png',
  },
];

const arrowMap = {
  prev: '/images/home/btn_prev.png',
  next: '/images/home/btn_next.png',
};

const Arrow = ({ className, onClick, type }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={arrowMap[type]} alt="btn_prev" />
    </div>
  );
};

const HomeBlock = styled.div`
  .slick-prev {
    left: 10% !important;
    z-index: 1;
  }
  .slick-next {
    right: 10% !important;
    z-index: 1;
  }
  .slick-prev:before,
  .slick-next:before {
    content: '' !important;
  }
`;

const SlideDev = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${({ img }) => img});
  position: relative;
  height: 50rem;
  background-size: cover;
  background-position: center 20%;
  color: #fff;
  text-align: center;
  &:before {
    display: block;
    opacity: 0.3;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
  }
`;

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow type="prev" />,
    nextArrow: <Arrow type="next" />,
  };
  return (
    <>
      <Header />
      <HomeBlock>
        <Slider {...settings}>
          {slideItems.map((i) => (
            <SlideDev img={i.img} />
          ))}
        </Slider>
      </HomeBlock>
    </>
  );
};

export default Home;
