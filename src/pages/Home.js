import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';
import HeaderContainer from '../containers/common/HeaderContainer';
import Footer from '../components/Footer';

const arrowMap = {
  prev: '/images/home/btn_prev.png',
  next: '/images/home/btn_next.png',
};

const Arrow = ({ className, onClick, type }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={arrowMap[type]} alt="arrow" />
    </div>
  );
};

const HomeBlock = styled.div``;

const SliderWrapper = styled.div`
  .slick-list,
  .slick-track {
    display: flex !important;
  }
  .slick-slide {
    height: inherit !important;
  }
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

const SliderItem = styled.div`
  height: ${document.documentElement.scrollHeight - 4.5 * 16 - 10 * 16}px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
    url(${({ background }) => background});
  background-size: cover;
  background-position: center 20%;
  color: white;

  div {
    text-align: center;
    font-weight: 500;

    img {
      width: 32rem;
    }
    .head {
      font-size: 5rem;
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    }
    p {
      font-size: 1.25rem;
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
          <SliderItem background="/images/home/bg_visual1.png">
            <div>
              <Fade top>
                <img src="/images/home/img_visual1.png" alt="home-img" />
              </Fade>
            </div>
          </SliderItem>
          <SliderItem background="/images/home/bg_visual2.png">
            <div>
              <span className="head">Love & Belif</span>
              <p>
                A place where we can acopt only when we have faith in each
                other.
              </p>
              <p>서로의 믿음이 있어야 입양할 수 있는 곳</p>
            </div>
          </SliderItem>
          <SliderItem background="/images/home/bg_visual3.png">
            <div>
              <span className="head">Point</span>
              <p>
                The PERPET MATCH will secure trust through point. All these
                points will be used for pets.
              </p>
              <p>
                퍼펫매치는 포인트를 통해 신뢰를 확보하고, 이 포인트는 반려동물을
                위해서 사용됩니다.
              </p>
            </div>
          </SliderItem>
        </Slider>
      </SliderWrapper>

      <Footer />
    </HomeBlock>
  );
};

export default Home;
