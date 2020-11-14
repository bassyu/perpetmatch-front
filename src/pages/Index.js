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

const AboutBlock = styled.div``;

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

const BottomBlock = styled.div``;

const BottomWel = styled.div`
  div {
    text-align: center;
    background-color: white;
    height: 15rem;
    padding-top: 3rem;

    span {
      font-size: 4rem;
      font-weight: 100;
      color: #204030;
    }
    .title {
      font-weight: 700;
    }
    .sub {
      font-size: 1rem;
      color: black;
    }
  }
`;

const BottomLove = styled.div`
  div {
    height: 39rem;

    .loveImg {
      img {
        height: 39rem;
        width: 65rem;
      }
    }
    .loveSub {
      background-color: ${palette.gray[2]};
      width: 38.75rem;
      padding-left: 4rem;
      padding-top: 3rem;

      .head {
        font-size: 3rem;
        font-weight: 500;
      }
      p {
        font-size: 1.25rem;
      }
      .subEng {
        font-weight: 1;
      }
    }
  }
`;

const BottomDep = styled.div`
  div {
    height: 39rem;
    color: white;

    .depImg {
      img {
        height: 39rem;
        width: 65rem;
      }
    }
    .depSub {
      background-color: #56adb4;
      width: 38.75rem;
      padding-left: 10rem;
      padding-top: 3rem;

      .head {
        font-size: 3rem;
        font-weight: 500;
      }
      p {
        font-size: 1.25rem;
      }
      .subEng {
        font-weight: 1;
      }
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
    <AboutBlock>
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
      <BottomBlock>
        <BottomWel>
          <div>
            <span>Welcome to </span>
            <span className="title">PERPET MATCH</span>
            <p className="sub">
              또 다른 만남을 위해 존재하는 PERPET MATCH 이제 안심하고 올바른
              선택을 하세요.
            </p>
          </div>
        </BottomWel>
        <BottomLove>
          <div style={{ display: 'inline-flex' }}>
            <div className="loveImg">
              <img src="/images/home/bg_visual4.png" alt="bg_visual4.png" />
            </div>
            <div className="loveSub">
              <span className="head">Love & Belif</span>
              <p>사랑 & 믿음</p>
              <p className="subEng">
                A Place where we can acopt only when
                <p>we have faith in each other.</p>
              </p>
              <p>서로의 믿음이 있어야 입양할 수 있는 곳</p>
            </div>
          </div>
        </BottomLove>
        <BottomDep>
          <div style={{ display: 'inline-flex' }}>
            <div className="depSub">
              <span className="head">Deposit</span>
              <p>보증금</p>
              <p className="subEng">
                The PERPET MATCH will secure trust
                <p>
                  through deposits.
                  <p>All these deposits will ve used for pets.</p>
                </p>
              </p>
              <p>
                퍼펫매치는 보증금을 통해 신뢰를 확보하고,
                <p>
                  이 모든 보증금은
                  <p>반려동물을 위해 사용 될 것입니다.</p>
                </p>
              </p>
            </div>
            <div className="depImg">
              <img src="/images/home/bg_visual3.png" alt="bg_visual5.png" />
            </div>
          </div>
        </BottomDep>
      </BottomBlock>
      <Footer />
    </AboutBlock>
  );
}

export default Index;
