import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';
import HeaderContainer from '../containers/common/HeaderContainer';
import Footer from '../components/Footer';

const getDummy = (n = 30) => {
  const l = [];
  for (let i = 0; i < n; i++) {
    l.push(i);
  }
  return l.map((i) => <h1 key={i}>{i}</h1>);
};

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

const HomeBlock = styled.div``;

const SliderWrapper = styled.div`
  /*.slick-list,
  .slick-track {
    height: 100%;
  }*/
  .slick-prev {
    left: 4% !important;
    z-index: 1;
  }
  .slick-next {
    right: 4% !important;
    z-index: 1;
  }
  .slick-prev:before,
  .slick-next:before {
    content: '' !important;
  }
  .slick-dots {
    bottom: 4rem;
    li button::before {
      color: #fff;
      opacity: 0.7;
    }
    li.slick-active button::before {
      opacity: 1;
    }
  }
`;

const SlideDiv = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${({ background }) => background});
  display: flex !important;
  justify-content: center;
  align-items: center;

  //height: 100%;
  height: 60rem;
  background-size: cover;
  background-position: center 20%;
  color: #fff;
  .img {
    img {
      width: 32rem;
    }
  }
`;

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow type="prev" />,
    nextArrow: <Arrow type="next" />,
  };
  return (
    <HomeBlock>
      <HeaderContainer width="auto" />
      <SliderWrapper>
        <Slider {...settings}>
          <SlideDiv background="/images/home/bg_visual1.png">
            <Fade top>
              <span className="img">
                <img
                  src="/images/home/img_visual1.png"
                  alt="완벽한 만남 완벽한 이별"
                />
              </span>
            </Fade>
          </SlideDiv>
          <SlideDiv background="/images/home/bg_visual2.png">
            <span className="title">Love & belif</span>
          </SlideDiv>
          <SlideDiv background="/images/home/bg_visual3.png">
            <span className="title">Deposit</span>
          </SlideDiv>
        </Slider>
      </SliderWrapper>
      <Footer />
    </HomeBlock>
  );
};

export default Home;
