import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import Footer from '../components/Footer';
import HeaderContainer from '../containers/common/HeaderContainer';
import palette from '../lib/styles/palette';

const PetBoardBlock = styled.div`
  background: white;

  .menu {
    position: fixed;
    top: 8rem;
    right: 0;
    left: 0;
    width: 80rem;
    margin: 0 auto;
    .box {
      float: right;
      height: 0;
      margin-right: 8rem;
      width: 20rem;

      .title {
        border-bottom: solid 0.25rem;
        padding-bottom: 1.5rem;
        font-size: 1.5rem;
        font-weight: 700;
      }
      p {
        border-bottom: solid 0.125rem ${palette.gray[4]};
        padding-bottom: 0.5rem;
        font-size: 1rem;
      }
      .tags {
        margin: 1.5rem 0;
        font-size: 1.125rem;
        font-weight: 500;
        color: ${palette.gray[6]};
        span + span {
          margin-left: 0.5rem;
        }
      }
      .price-area {
        font-family: Montserrat;
        font-size: 2rem;
        color: ${palette.sub[0]};
        .price {
          font-weight: 500;
          font-size: 2.5rem;
          margin-right: 0.25rem;
        }
      }
      .btn-area {
        margin: 2rem 0;
        button {
          width: 9.75rem;
          height: 3rem;
          font-size: 1.125rem;
        }
        button + button {
          margin-left: 0.5rem;
        }
      }
      .share-area {
        img + img {
          margin-left: 0.5rem;
        }
      }
    }
  }
  .context {
    width: 80rem;
    margin: 0 auto;
    padding: 4rem 6rem;
    img {
      width: 42rem;
      height: 30rem;
    }
    img + img {
      margin-top: 1rem;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

const PetBoard = () => {
  const [dataURL, setDataURL] = useState('');

  const onLoadImg = (e) => {
    e.persist();
    console.log(e);
    const render = new FileReader();
    render.onload = () => {
      setDataURL(render.result);
    };
    render.readAsDataURL(e.target.files[0]);
  };

  return (
    <PetBoardBlock>
      <HeaderContainer />
      <div className="menu">
        <div className="box">
          <div className="title">
            버려진 포메 보호하고 있습니다. 행복하게 키워주실 분 구합니다.
          </div>
          <div className="tags">
            <span>#강아지</span>
            <span>#포메라니안</span>
            <span>#남아</span>
            <span>#천안</span>
            <span>#1살</span>
          </div>
          <div className="price-area">
            <span className="price">150000</span>껌
          </div>
          <div className="btn-area">
            <Button background={'#8164ae'}>신 청</Button>
            <Button>관심글 등록</Button>
          </div>
          <div className="share-area">
            <p>공유하기</p>
            <img src="/images/sub/btn_share1.png" alt="페이스북" />
            <img src="/images/sub/btn_share2.png" alt="카카오톡" />
            <img src="/images/sub/btn_share3.png" alt="공유하기" />
          </div>
        </div>
      </div>
      <div className="context">
        <img src="/images/sub/img_adopt1.png" alt="" />
        <img src="/images/sub/img_adopt2.png" alt="" />
        <img src="/images/sub/img_adopt2.png" alt="" />
        <img src="/images/sub/img_adopt2.png" alt="" />
        <img src="/images/sub/img_adopt1.png" alt="" />
        <img src="/images/sub/img_adopt1.png" alt="" />
        <p>
          지난주에 천안삼거리 다리밑에서 우연히 발견하게 되었습니다.
          <br />
          사정상 저희가 기를 순 없어서 입양하실 분을 구하게 되었습니다.
        </p>
        <p>
          지난주에 천안삼거리 다리밑에서 우연히 발견하게 되었습니다.
          <br />
          사정상 저희가 기를 순 없어서 입양하실 분을 구하게 되었습니다.
        </p>
        <p>
          지난주에 천안삼거리 다리밑에서 우연히 발견하게 되었습니다.
          <br />
          사정상 저희가 기를 순 없어서 입양하실 분을 구하게 되었습니다.
        </p>
        <p>
          지난주에 천안삼거리 다리밑에서 우연히 발견하게 되었습니다.
          <br />
          사정상 저희가 기를 순 없어서 입양하실 분을 구하게 되었습니다.
        </p>
      </div>
      <Footer />
    </PetBoardBlock>
  );
};

export default PetBoard;
