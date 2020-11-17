import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Fade from 'react-reveal/Fade';
import Footer from '../components/Footer';
import palette from '../lib/styles/palette';
import HeaderContainer from '../containers/common/HeaderContainer';

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

const IndexBlock = styled.div`
  .index-banner {
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;

    .bold {
      font-weight: 700;
    }
    .head {
      margin: 1rem 0;
      color: ${palette.main};
      font-size: 4rem;
      font-weight: 100;
    }
    .description {
      font-size: 1.25rem;
    }
  }
  .description-wrapper {
    .section {
      display: flex;

      img {
        width: 64%;
      }
      .box {
        width: 36%;
        padding: 5rem;

        p {
          margin: 0;
          font-size: 1.5rem;
        }
        .thin {
          margin-bottom: 2rem;
          font-weight: 100;
        }
        .head {
          font-size: 2.5rem;
          font-weight: 700;
        }
        .description {
          margin-top: 3rem;
          border-top: solid 0.01rem;
          padding-top: 3rem;
        }
      }
      .gray {
        background: ${palette.gray[4]};
        color: ${palette.gray[8]};
      }
      .sub {
        background: ${palette.sub};
        color: white;
      }
    }
  }
`;

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
  height: ${document.documentElement.scrollHeight - 4.5 * 16}px;
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

function Index() {
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
    <IndexBlock>
      <HeaderContainer />
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
              <span className="head">Point System</span>
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
      <div className="index-banner">
        <Fade right big>
          <p className="head">
            Welcome to <span className="bold">PERPET MATCH</span>
          </p>
        </Fade>
        <p className="description">
          또 다른 만남을 위해 존재하는 PERPET MATCH 이제 안심하고 올바른 선택을
          하세요.
        </p>
      </div>
      <div className="description-wrapper">
        <div className="section">
          <Fade big>
            <img src="/images/home/bg_visual4.png" alt="section1-img" />
            <div className="box gray">
              <p className="head">Love & Belif</p>
              <p>사랑 & 믿음</p>
              <div className="description">
                <p className="thin">
                  A place where we can acopt only when we have faith in each
                  other.
                </p>
                <p>서로의 믿음이 있어야 입양할 수 있는 곳</p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="section">
          <Fade big>
            <div className="box sub">
              <p className="head">Point System</p>
              <p>포인트 (껌)</p>
              <div className="description">
                <p className="thin">
                  The PERPET MATCH will secure trust through point. All these
                  points will be used for pets.
                </p>
                <p>
                  퍼펫매치는 포인트를 통해 신뢰를 확보하고, 이 포인트는
                  반려동물을 위해서 사용됩니다.
                </p>
              </div>
            </div>
            <img src="/images/home/bg_visual3.png" alt="section2-img" />
          </Fade>
        </div>
      </div>
      <Footer />
    </IndexBlock>
  );
}

export default Index;
